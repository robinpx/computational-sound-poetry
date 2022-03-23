import React, { useState, useEffect } from "react";

const lines = [
    ["without beginning or end,", "neither in response or question,","endlessly,","without end or beginning,","neither in question or response,","in loop,"],
    ["desolate", "bare", "naked", "static", "pearly", "white"],
    ["bodies", "orbs", "stones", "marbles", "kernels", "dewdrops"],
    ["grapple", "latch", "grip", "cling", "hug", "entangle"],
    ["onto", "onto", "onto", "onto", "onto", "onto"],
    ["all", "every", "all", "each", "all", "any"],
    ["matter,", "debris,", "casuality,", "knowing,", "presence,", "bits,"],
    ["skipping", "warping", "drifting", "bonding", "lingering"],
    ["", "", "","", "", ""],
    ["onto","in sinewed","by braided","through weaved","into","in cycloned"],
    ["space-time", "continuum", "unity", "fabric", "solitude", "rifts"],
    ["", "", "","", "", ""],
    ["", "", "","", "", ""],
    ["what trickles", "what grieves", "what plummets", "what vanishes", "what dissolves","what rushes"],
    ["from those", "from those", "from those", "from those", "from those", "from those"],
    ["bodies", "orbs", "stones", "marbles", "kernels", "dewdrops"],
    ["constantly", "in dial", "in time", "at once", "in light-seconds", "instantaneously"],
    ["clamors back", "blooms", "wakens", "returns in palmed", "emerges", "rises"],
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
    <div id="chaos-theory" onClick={() => window.location.reload()}>
        {lines.map((words, i) => {
            return <div className="line">
                {words.map((word,j) => 
                    pattern[i] !== j ? <div className="word hide">{word}</div> : <div className="word">{word}</div>
                )}
                </div>
        })}
    </div>
    : <React.Fragment />
    
}
  
 export default ChaosTheory;
