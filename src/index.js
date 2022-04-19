import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";

import "./style.css";
// this is the card component

ReactDOM.render(
  // this is the advantage of using the components we hav
  // how to update it with different value in the card we have
  // we can do it with help of props
  <>
    <Card 
    imgsrc ="https://picsum.photos/200/300?random=1"
    // it will print in the console we ha
    sname = "Dark"
    title = "Netflix original series"
    link = "https://www.netflix.com/in/title/80100172"/>

    <Card
    imgsrc ="https://picsum.photos/200/300?random=2"
    sname = "Stranger Things"
    title = "Netflix original series"
    link = "https://www.netflix.com/in/title/80057281"/>

    <Card
    imgsrc ="https://picsum.photos/200/300?random=3"
    sname = "Breaking Bad"
    title = "Netflix original series"
    link = "https://www.netflix.com/in/title/70143836"/>

    <Card
    imgsrc ="https://picsum.photos/200/300?random=4"
    sname = "Shawshank redemption"
    title = "Not netflix original series"
    link = "https://www.netflix.com/in/title/70005379"/>
  </>,
  document.getElementById("root")
);
