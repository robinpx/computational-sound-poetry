
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
      <React.Fragment>
      <header>
      <div id="title">computational / sound poetry</div>
      <div id="desc">headphones on</div>
      </header>
        <div id="index">
            <a href="?chaos-theory">chaos theory</a>
            <a href="?pattern-recognition">pattern recognition</a>
            <a href="?silent-forest">林中答案</a>
            <a href="?eternal">eternal ear</a>
      </div>
      </React.Fragment>
    );
  }
  return <React.Fragment/>
  
}

export default Pages;
