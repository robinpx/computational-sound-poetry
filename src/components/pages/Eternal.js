import React, {useState, useEffect} from "react";

function Eternal() {

    const [played, setPlayed] = useState(-1);
    const [isPlaying, setIsPlaying] = useState(false);
    const [intervalID,setIntervalID] = useState(-1);
    const [subtitles, setSubtitles] = useState(-1);
    const [chaosGrid,setChaosGrid] = useState(<React.Fragment></React.Fragment>);
    const [flash, setFlash] = useState("flash-off");

    function ChaosGrid() {
        let rule = Math.floor(Math.random() * 20); // simple rule
        let length = 4000;
        let grid = [];
        for (let i=0;i<length;i++) {
            if (i % rule === 0) {
                grid.push(1);
            }
            else {
                grid.push(0);
            }
        }
        return <div id="chaos-grid">
            {grid.map((bit,i) => {
                return bit === 1 ? <div className="bit filled" key={i}></div> : <div className="bit" key={i}></div>
            })}
         </div>
    }

    const playPause = () => {
        let audioElem = document.getElementById("song");
        if (audioElem.paused) {
            audioElem.play();
            setIsPlaying(true);
            console.log("Now playing");
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
                let audioElem = document.getElementById("song");
                const markers = [1,23,24,33,41,47,52,63,65];
                console.log(audioElem.currentTime)
                if (audioElem.currentTime >= 65 && audioElem.currentTime <= 117) {
                    setChaosGrid(<ChaosGrid/>);
                }
                else if (audioElem.currentTime >= 117) {
                    setChaosGrid(<React.Fragment></React.Fragment>)
                    setFlash("flash-on");
                }
                if (Math.floor(audioElem.currentTime) === markers[i]) {
                    subtitles[i] = "active";
                    setSubtitles(subtitles);
                    i++;
                }
                setPlayed(audioElem.currentTime / audioElem.duration * 100);

                if (audioElem.currentTime === audioElem.duration) {
                    clearInterval(intervalID);
                    setIntervalID(-1);
                }
            },500);
            setIntervalID(intervalID);
        }
    },[played, isPlaying,setIntervalID,intervalID, subtitles, flash]);

    return played !== -1 ? 
    <div id="container-strict">
        <div id="eternal" onClick={playPause} className={flash}>
        {chaosGrid}
        <div id="soundnote">
            <img className={isPlaying ? "sound-on" : "sound-off"} alt="speaker" src="https://img.icons8.com/ios-glyphs/30/000000/room-sound.png"/> 
        </div>

        <audio id="song"> 
        <source src="https://docs.google.com/uc?export=open&id=1j7ctRtDc1dPUFqitQzq_aVdGB76dG3He" type="audio/mp3"></source>
        Your browser does not support the audio element.
        </audio>

        <div className={"left " + subtitles[0]}>。</div>
        <div className={"left " + subtitles[1]} style={{ marginLeft : '1em' }}>what is</div>
        <div className={"left " + subtitles[2]} style={{ marginLeft : '2.5em' }}>this </div> 
        <div className={"left " + subtitles[3]} style={{ marginLeft : '3.5em' }}>eternal</div> 
        <div className={"left " + subtitles[4]} style={{ marginLeft : '5em' }}>vastness</div> 
        <div className={"center " + subtitles[5]}>overwhelming</div>  
        <div className={"center " + subtitles[6]} style={{ marginLeft : '5em' }}>my being</div>  
        <div className={"right " + subtitles[7]} style={{ marginRight : '4em' }}>if only</div>
        <div className={"right " + subtitles[8]}>i had known</div>

        <div id="progressbar">
            <div id="current" style={{ "width": played + "%" }}></div>
        </div>

       </div>
    </div>
    : <React.Fragment/>
}
  
 export default Eternal;
