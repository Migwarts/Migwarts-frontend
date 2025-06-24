import React, { useState } from "react";
import axios from "axios";
import backgroundImg from "../assets/images/chatBackgroundImg.png";
import "../styles/ChatBot.css";  // 파일명 ChatBot.css로 변경 완료

export default function ChatBot() {
    const [userInput, setUserInput] = useState("");
    const [chatLog, setChatLog] = useState([]);

    const sendMessage = async () => {
        try {
            const response = await axios.post("http://localhost:3000/api/chatbot", {
                message: userInput,
            });

            setChatLog([
                ...chatLog,
                { from: "me", text: userInput },
                { from: "ai", text: response.data.reply },
            ]);
            setUserInput("");
        } catch (err) {
            console.error("에러 발생:", err);
        }
    };

    return (
        <div
            className="chat-container"
            style={{
                backgroundImage: `url(${backgroundImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "100vh",
            }}
        >
            <div className="chat-log">
                {chatLog.map((msg, idx) => (
                    <p
                        key={idx}
                        className={msg.from === "me" ? "msg-me" : "msg-ai"}
                    >
                        {msg.from === "me" ? "🐹" : "🍌"} {msg.text}
                    </p>
                ))}
            </div>

            <div className="input-container">
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="메세지를 입력하세요"
                    className="chat-input"
                    onKeyDown={(e) => {
                        if (e.key === "Enter") sendMessage();
                    }}
                />
                <button onClick={sendMessage} className="chat-button">
                    보내기
                </button>
            </div>
        </div>
    );
}