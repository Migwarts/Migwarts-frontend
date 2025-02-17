import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/ChatStyles.module.css';

import backgroundImg from '../assets/images/chatBackgroundImg.png';
import goHomeChat from '../assets/images/goHomeChat.png';
import sendIcon from '../assets/images/send.svg';

function Chat(){
    return (
        <div style={{backgroundImage: `url(${backgroundImg})`}} className={styles.body}>
            <img src={goHomeChat} className={styles.goHome} />
            <div className={styles.gradient}></div>
            <div className={styles.chatContainer}>
                <div className={styles.allChat}>
                    <div className={styles.otherChatContainer}>
                        <span className={styles.name}>2408 이소리</span>
                        <span className={styles.otherChat}>
                            세상에 태어날 때 인연인 사람들은 손과 손의 붉은 실이이어진채 온다 했죠
                        </span>
                    </div>
                    <div className={styles.otherChatContainer}>
                        <span className={styles.name}>2408 이소리</span>
                        <span className={styles.otherChat}>
                            세상에 태어날 때 인연인 사람들은 손과 손의 붉은 실이이어진채 온다 했죠
                        </span>
                    </div>
                    <div className={styles.otherChatContainer}>
                        <span className={styles.name}>2408 이소리</span>
                        <span className={styles.otherChat}>
                            세상에 태어날 때 인연인 사람들은 손과 손의 붉은 실이이어진채 온다 했죠
                        </span>
                    </div>
                    <div className={styles.myChatContainer}>
                        <span className={styles.name}>2408 이소리</span>
                        <span className={styles.myChat}>
                            세상에 태어날 때 인연인 사람들은 손과 손의 붉은 실이이어진채 온다 했죠
                        </span>
                    </div>
                    <div className={styles.myChatContainer}>
                        <span className={styles.name}>2408 이소리</span>
                        <span className={styles.myChat}>
                            세상에 태어날 때 인연인 사람들은 손과 손의 붉은 실이이어진채 온다 했죠
                        </span>
                    </div>
                </div>
                <div className={styles.inputChat}>
                    <input type="text" id="chat" placeholder="채팅을 남겨보세요" spellCheck={false} className={styles.input}/>
                    <img src={sendIcon} className="logo" />
                </div>
            </div>
        </div>
    )
}

export default Chat;