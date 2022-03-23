import React, { useState, useEffect } from "react";

function PatternRecog() {

    const [pattern,setPattern] = useState(-1);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isEnded, setIsEnded] = useState(true);
    const [intervalID, setIntervalID] = useState(-1);

    const playPause = () => {
        console.log("clicked");
        if (isPlaying && !isEnded) {
            setIsPlaying(false);
            clearInterval(intervalID);
            setInterval(-1);
        }
        else if (!isPlaying && isEnded) {
            setIsPlaying(true);
            setIsEnded(false);
            
            let i=0;
            let j=0;
            const audioElem = document.getElementById("bell");
            audioElem.volume = 0.1;
            const intervalID = setInterval(() => {
                if (pattern[i][j] === 1) {
                    console.log("play!");
                    audioElem.play();
                }
                else {
                    console.log("no play!")
                }
                if (j < pattern[i].length) {
                    j+=1;
                }
                else {
                    j=0;
                    if (i < pattern.length) {
                        i+=1;
                    }
                    else {
                        clearInterval(intervalID);
                        setInterval(-1);
                        setIsEnded(true);
                    }
                }
            }, 3000);
            audioElem.currentTime = 0;
            setIntervalID(intervalID);
        }
        else {
            setIsPlaying(false);
            setIsEnded(true);
            clearInterval(intervalID);
            setIntervalID(-1);
        }
    }

    useEffect(() => {
        let lines = [
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
        ];

        if (pattern === -1) {
            for (let i=0;i < lines.length;i++) {
                for (let j=0;j < lines[i].length;j++) {
                    let chosenInd = Math.floor(Math.random() * 2);
                    console.log(chosenInd)
                    lines[i][j] = chosenInd;
                }
            }
            setPattern(lines);
        }

    },[setPattern, pattern])

    return pattern !== -1 ? 
    <div id="pattern-recog" onClick={playPause}>
        <div id="soundnote">
            <img className={isPlaying ? "sound-on" : "sound-off"} alt="speaker" src="https://img.icons8.com/ios-glyphs/30/000000/room-sound.png"/>
        </div>

        <audio id="bell">
        <source src="./assets/bell.mp3" type="audio/mp3"></source>
        Your browser does not support the audio element.
        </audio>

        {pattern.map((bits, i) => {
            return <React.Fragment>
                <div className="line">
                    {bits.map((bit,j) => 
                        bit === 1 ? <div className={isPlaying ? "word filled" : "word"}>|</div> : <div className={isPlaying ? "word faded" : "word"}>◯</div>
                    )}
                </div> 
            </React.Fragment>
        })}
    </div>
    : <React.Fragment />
    
}
  
 export default PatternRecog;
