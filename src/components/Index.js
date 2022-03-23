
import React from "react";
import ChaosTheory from './ChaosTheory';
import Silent from './Silent';
import Eternal from './Eternal';
import PatternRecog from './PatternRecog';


function Index() {

  const windowlink = window.location.href;

  if (windowlink.includes("/?chaos-theory") > 0) {
    return (
      <ChaosTheory />
    );
  }
  else if (windowlink.includes("/?silent-forest") > 0) {
    return (
        <Silent />
    );
  }
  else if (windowlink.includes("/?pattern-recog") > 0) {
    return (
        <PatternRecog />
    );
  }
  else if (windowlink.includes("/?eternal") > 0) {
    return (
        <Eternal />
    );
  }
  return (
    <React.Fragment>
    <header>
    <div id="title">computational / sound &nbsp; poetry</div>
    <div id="desc">headphones on</div>
    </header>
      <div id="index">
          <a href="/?chaos-theory">chaos theory</a>
          <a href="/?pattern-recog">pattern recognition</a>
          <a href="/?silent-forest">林中答案</a>
          <a href="/?eternal">eternal ear</a>
     </div>
     </React.Fragment>
  );
  
}

export default Index;
