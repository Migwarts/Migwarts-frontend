import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/ChatStyles.module.css";
import { InfoContext } from "../context/InfoContext";
import { ResultContext } from "../context/ResultContext";
import axios from "axios";

import backgroundImg from "../assets/images/chatBackgroundImg.png";
import goHomeChat from "../assets/images/goHomeChat.png";
import sendIcon from "../assets/images/send.svg";

const dormitorys = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

function Chat() {
  const { name, number, userId } = useContext(InfoContext);
  const { dormitoryResult } = useContext(ResultContext);
  const [chatData, setChatData] = useState([]);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);
  const [message, setMessage] = useState("");
  const [myChatting, setMyChatting] = useState([]);

  const fetchChat = async () => {
    try {
      const response = await axios.get(
        `/api/get/chat/${dormitorys[dormitoryResult]}`
      );
      setChatData(response.data.data || []);
    } catch (error) {
      console.error("Failed to fetch chat data:", error);
    }
  };

  const addChat = async () => {
    const mychat = message.trim();
    if (!mychat) return;

    try {
      await axios.post(`/api/post/chat/${userId}`, {
        dormitory: dormitorys[dormitoryResult],
        newChat: mychat,
      });

      setMyChatting((prev) => [...prev, mychat]);
      setMessage("");
    } catch (error) {
      console.error("❌ Failed to send chat:", error);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      addChat();
    }
  };

  useEffect(() => {
    fetchChat();
  }, [dormitoryResult]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatData, myChatting]);

  const inputChange = () => {
    if (inputRef.current) {
      setMessage(inputRef.current.value);
    }
  };

  useEffect(() => {
    if (!inputRef.current) return;
    if (message.length < 40) {
      inputRef.current.style.height = `${window.innerWidth * 0.01985}px`;
    } else {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  }, [message]);

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImg})` }}
      className={styles.body}
    >
      <Link to="/">
        <img src={goHomeChat} className={styles.goHome} />
      </Link>
      <div className={styles.chatContainer}>
        <div ref={scrollRef} className={styles.allChat}>
          <div className={styles.gradient} />
          {chatData.length > 0 &&
            chatData.map((item, index) => {
              if (item.number == number) {
                return (
                  <div className={styles.myChatContainer} key={index}>
                    <span className={styles.name}>
                      {`${item.number} ${item.name}`}
                    </span>
                    {item.chat.map((element, key) => (
                      <span className={styles.myChat} key={key}>
                        {element}
                      </span>
                    ))}
                  </div>
                );
              } else {
                return (
                  <div className={styles.otherChatContainer} key={index}>
                    <span className={styles.name}>
                      {`${item.number} ${item.name}`}
                    </span>
                    {item.chat.map((element, key) => (
                      <span className={styles.otherChat} key={key}>
                        {element}
                      </span>
                    ))}
                  </div>
                );
              }
            })}
          {myChatting.length > 0 && (
            <div className={styles.myChatContainer}>
              <span className={styles.name}>{`${number} ${name}`}</span>
              {myChatting.map((element, key) => (
                <span className={styles.myChat} key={key}>
                  {element}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className={styles.inputChat}>
          <textarea
            ref={inputRef}
            rows={1}
            type="text"
            placeholder="채팅을 남겨보세요"
            spellCheck={false}
            value={message}
            onChange={inputChange}
            onKeyDown={handleKeyDown}
            className={styles.input}
          />
          <img src={sendIcon} className={styles.send} onClick={addChat} />
        </div>
      </div>
    </div>
  );
}

export default Chat;
