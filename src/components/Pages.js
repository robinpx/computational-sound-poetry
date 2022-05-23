
import React from "react";
import ChaosTheory from "./pages/ChaosTheory";
import PatternRecog from "./pages/PatternRecog";
import Silent from "./pages/Silent";
import Eternal from "./pages/Eternal";

function Pages() {
  
  const windowlink = window.location.href;

  if (windowlink.includes("?chaos-theory") > 0) {
    return (<ChaosTheory/>)
  }
  else if (windowlink.includes("?pattern-recognition") > 0) {
    return (<PatternRecog/>)
  }
  else if (windowlink.includes("?silent-forest") > 0) {
    return (<Silent/>)
  }
  else if (windowlink.includes("?eternal") > 0) {
    return (<Eternal/>)
  }
  else if (windowlink.includes("computational-sound-poetry") > 0) {
    return (
      <div id="container-strict">
      <div id="cover">
      <header>
      <div id="title">Computational Sound Poetry</div>
      </header>
      <div id="index">
            <a href="?chaos-theory">chaos theory</a>
            <a href="?pattern-recognition">pattern recognition</a>
            <a href="?silent-forest">林中答案</a>
            <a href="?eternal">eternal ear</a>
      </div>
      <div id="desc"><i>Computational Sound Poetry</i> is a small collection of working interactive poems written by <a href="https://robinpx.github.io">Robin *</a> that designs spiritual textual landscapes about chaos and balance, silence and noise, peace and terror with sound and computation.</div>
      </div></div>
    );
  }
  return <React.Fragment/>
  
}

export default Pages;