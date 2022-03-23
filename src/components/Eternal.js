import React, {useState, useEffect} from "react";

function Eternal() {

    const [played, setPlayed] = useState(-1);
    const [isPlaying, setIsPlaying] = useState(false);
    const [intervalID,setIntervalID] = useState(-1);
    const [subtitles, setSubtitles] = useState(-1);

    const playPause = () => {
        const audioElem = document.getElementById("song");
        if (audioElem.paused) {
            audioElem.play();
            setIsPlaying(true);
        }
        else if (audioElem.currentTime === audioElem.duration) {
            window.location.reload();
        }
        else {
            audioElem.pause();
            setIsPlaying(false);
        }
    }

    const defaultSubs = () => {
        let subs = [];
        for (let i=0;i < 9;i++) {
            subs.push("");
        }
        setSubtitles(subs);
    }

    useEffect(() => {
        if (played === -1) {
            setPlayed(0);
            defaultSubs();
        }
        if (isPlaying && intervalID === -1) {
            let i=0;
            const intervalID = setInterval(() => {
                const audioElem = document.getElementById("song");
                const markers = [0,23,24,33,41,47,52,63,65];
                if (Math.abs(markers[i] - Math.floor(audioElem.currentTime)) === 1) {
                    defaultSubs();
                    subtitles[i] = "active";
                    setSubtitles(subtitles);
                    i++;
                }
                setPlayed(audioElem.currentTime / audioElem.duration * 100);

                if (audioElem.currentTime === audioElem.duration) {
                    clearInterval(intervalID);
                    setIntervalID(-1);
                }
            },1000);
            setIntervalID(intervalID);
        }
    },[played, isPlaying,setIntervalID,intervalID, subtitles]);

    return played !== -1 ? 
        <div id="eternal" onClick={playPause}>
        <div id="soundnote">
            <img className={isPlaying ? "sound-on" : "sound-off"} alt="speaker" src="https://img.icons8.com/ios-glyphs/30/000000/room-sound.png"/>
        </div>

        <audio id="song">
        <source src="./assets/eternal.mp3" type="audio/mp3"></source>
        Your browser does not support the audio element.
        </audio>
        <div className={"left " + subtitles[0]}>。</div>
        <div className={"left " + subtitles[1]}>&nbsp; &nbsp; what is</div>
        <div className={"left " + subtitles[2]}>&nbsp; &nbsp; &nbsp; this </div> 
        <div className={"left " + subtitles[3]}> &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; eternal</div> 
        <div className={"left " + subtitles[4]}> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; vastness</div> 
        <div className={"center " + subtitles[5]}>overwhelming</div>  
        <div className={"center " + subtitles[6]}>my being</div>  
        <div className={"right " + subtitles[7]}>if only&nbsp;&nbsp;&nbsp;</div>
        <div className={"right " + subtitles[8]}>i had known</div>

        <div id="progressbar">
            <div id="current" style={{ "width": played + "%" }}></div>
        </div>

       </div>
    : <React.Fragment/>
}
  
 export default Eternal;
