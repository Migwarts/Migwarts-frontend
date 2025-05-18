import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styles from '../styles/ResultCharacter.module.css';
import { CharacterContext } from "../context/CharacterContext"

import hermione from "../assets/images/Hermione.png"
import herrypoter from "../assets/images/harryPotter.png"
import ron from "../assets/images/ron.png" 

import runa from "../assets/images/runa.png"
import cho from "../assets/images/cho.png"
import philius from "../assets/images/philius.png" 

import pomona from "../assets/images/pomona.png"
import sedric from "../assets/images/sedric.png" 
import hellga from "../assets/images/hellGa.png"

import malpoy from "../assets/images/malpoy.png"
import snape from "../assets/images/snape.png" 
import voldemort from "../assets/images/voldemort.png"

import goHome from "../assets/images/goHomeB.png"

const characterImages = [
    hermione, herrypoter, ron,
    runa, cho, philius,
    pomona, sedric, hellga,
    malpoy, snape, voldemort
]

export default function ResultCharacter() {
    const { character } = useContext(CharacterContext);
    const [backgroundUrl, setBackgroundUrl] = useState(null);
    useEffect(() => {
        if (character >= 0 && character < characterImages.length) {
            setBackgroundUrl(characterImages[character]);
        }
        console.log(character);
    }, [character]);
    return (
        <div>
            <img src={backgroundUrl} className={styles.characterBackground}></img>
            <Link to="/">
                <img src={goHome} className={styles.goHomeBtn}></img>
            </Link>
        </div>
    )
}