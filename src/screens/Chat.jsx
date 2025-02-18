import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/ChatStyles.module.css';

import backgroundImg from '../assets/images/chatBackgroundImg.png';
import goHomeChat from '../assets/images/goHomeChat.png';
import sendIcon from '../assets/images/send.svg';

const number = "2408";
const name = "sori";
const chatData = [
    {
      "number": "2408",
      "name": "sori",
      "chat": [
        "세상에 태어날 때 인연인 사람들은 손과 손의 붉은 실이 이어진 채 온다 했죠"
      ]
    },
    {
      "number": "2025",
      "name": "jin",
      "chat": [
        "우리의 만남은 우연이 아니었어요. 순간이 운명처럼 다가왔죠.",
        "Our meeting was not a coincidence. The moment came to us like fate.",
        "우리의 만남은 우연이 아니었어요. 모든 순간이 운명처럼 다가왔죠. 우리의 만남은 우연이 아니었어요. 모든 순간이 운명처럼 다가왔죠.",
        "우리의 만남은 우연이 아니었어요. 모든 순간이 운명처럼 다가왔죠. 우리의 만남은 우연이 아니었어요. 모든 순간이 운명처럼 다가왔죠. 우리의 만남은 우연이 아니었어요. 모든 순간이 운명처럼 다가왔죠."
      ]
    },
    {
      "number": "2026",
      "name": "jiho",
      "chat": [
        "시간은 흐르고 있지만, 그때의 기억은 여전히 마음속에 살아있어요."
      ]
    },
    {
      "number": "2027",
      "name": "hyun",
      "chat": [
        "햇살이 따뜻하게 비추는 날, 그대와 함께 걸었던 길이 아직도 선명해요."
      ]
    },
    {
      "number": "2408",
      "name": "sori",
      "chat": [
        "모든 일이 끝난 후에도 우리는 여전히 그곳에서 함께였죠."
      ]
    },
    {
      "number": "2029",
      "name": "jiyoung",
      "chat": [
        "이제는 다시 돌아갈 수 없지만, 그 순간들은 우리에게 소중한 기억으로 남아요."
      ]
    },
    {
      "number": "2030",
      "name": "hyun",
      "chat": [
        "이 길이 맞는지 확신이 없지만, 함께라면 어디든지 괜찮아요."
      ]
    },
    {
      "number": "2408",
      "name": "sori",
      "chat": [
        "모든 일이 끝난 후에도 우리는 여전히 그곳에서 함께였죠."
      ]
    }
]

function Chat(){
    const scrollRef = useRef(null);
    const [message, setMessage] = useState("");
    const lastChat = () => {
        if(chatData[chatData.length-1].number === number){
            const lastchat = chatData.pop();
            return lastchat.chat;
        }
        else {
            return "";
        }
    }
    const [myChatting, setMyChatting] = useState(lastChat());
    const addChat = () => {
        const mychat = message.trim();
        if (mychat !== "") {
            setMyChatting(pre => [...pre, mychat]);
            setMessage("");
        }
    };
    const handleKeyDown = ( event ) => {
        if (event.key === "Enter") {
            addChat();
        }
    }
    useEffect(() => {
        if(scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [myChatting])
    return (
        <div style={{backgroundImage: `url(${backgroundImg})`}} className={styles.body}>
            <img src={goHomeChat} className={styles.goHome} />
            <div className={styles.chatContainer}>
                <div ref={scrollRef} className={styles.allChat}>
                  <div className={styles.gradient} />
                    {chatData.map((item, index) => {
                        if (item.number === number) { return (
                        <div className={styles.myChatContainer} key={index}>
                            <span className={styles.name}>{`${item.number} ${item.name}`}</span>
                            {item.chat.map((element, key) => (
                                <span className={styles.myChat} key={key}>
                                    {element}
                                </span>
                            ))}
                        </div> )}
                        else { return (
                        <div className={styles.otherChatContainer} key={index}>
                            <span className={styles.name}>{`${item.number} ${item.name}`}</span>
                            {item.chat.map((element, key) => (
                                <span className={styles.otherChat} key={key}>
                                    {element}
                                </span>
                            ))}
                        </div> )}
                    })}
                    {myChatting.length > 0 && (
                        <div className={styles.myChatContainer}>
                            <span className={styles.name}>{`${number} ${name}`}</span>
                            {myChatting.map((element, key) => (
                                <span className={styles.myChat} key={key}>
                                    {element}
                                </span>
                            ))}
                        </div> )}
                </div>
                <div className={styles.inputChat}>
                    <input 
                        type="text" 
                        placeholder="채팅을 남겨보세요" 
                        spellCheck={false} 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className={styles.input}/>
                    <img src={sendIcon} className={styles.send} onClick={addChat}/>
                </div>
            </div>
        </div>
    )
}

export default Chat;