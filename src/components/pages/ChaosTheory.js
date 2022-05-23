import React, { useState, useEffect } from "react";

const lines = [
    ["without beginning or end,", "elliptically,","endlessly,","spiraling,","neither in question or response,","incessantly,"],
    ["desolate", "bare", "naked", "static", "pearly", "white"],
    ["bodies", "orbs", "stones", "marbles", "kernels", "dewdrops"],
    ["grapple", "latch", "grip", "cling", "hug", "entangle"],
    ["onto", "onto", "onto", "onto", "onto", "onto"],
    ["all", "every", "all", "each", "all", "any"],
    ["matter,", "debris,", "casuality,", "knowing,", "presence,", "immanence,"],
    ["skipping", "warping", "drifting", "bonding", "lingering"],
    ["", "", "","", "", ""],
    ["onto","in sinewed","by braided","through weaved","into","in cycloned"],
    ["space", "continuum", "unity", "fabric", "solitude", "rifts"],
    ["", "", "","", "", ""],
    ["", "", "","", "", ""],
    ["what trickles", "what grieves", "what plummets", "what vanishes", "what dissolves","what rushes"],
    ["from those", "from those", "from those", "from those", "from those", "from those"],
    ["bodies", "orbs", "stones", "marbles", "kernels", "dewdrops"],
    ["constantly", "gradually", "in time", "at once", "in light-seconds", "instantaneously"],
    ["clamors back", "blooms", "wakens", "lurches", "emerges", "rises"],
    ["a voice","violence","smoke","a disturbance","flames", "resurrection"]
    ];

function ChaosTheory() {

    const [pattern,setPattern] = useState(-1);

    useEffect(() => {
        if (pattern === -1) {
            let pt = [];
            for (let i=0;i < lines.length;i++) {
                let chosenInd = Math.floor(Math.random() * 6);
                pt.push(chosenInd);
            }
            pt[15]=pt[2];
            console.log(pt);
            setPattern(pt);
        }

    },[pattern,setPattern])

    return pattern !== -1 ? 
    <div id="container-no-strict">
        <div id="chaos-theory" onClick={() => window.location.reload()}>
            {lines.map((words, i) => {
                return <div className="line" key={i}>
                    {words.map((word,j) => 
                        pattern[i] !== j ? <div className="word hide" key={j}>{word}</div> : <div className="word" key={j}>{word}</div>
                    )}
                    </div>
            })}
        </div>
    </div>
    : <React.Fragment />
    
}
  
 export default ChaosTheory;
