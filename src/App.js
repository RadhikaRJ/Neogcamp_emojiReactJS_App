import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var headingText = "Craving for something sweet ?";
  var bgColor = "#FEF3C7";
  var textColor = "#9D174D";

  //var [counter, setCounterValue] = useState(0);
  //var [userInput, setUserInput] = useState("");

  var sweetList = {
    "🍦": "Soft Serve",
    "🍧": "Snow Cone",
    "🍨": "Ice Cream",
    "🍩": "Doughnut",
    "🍪": "Cookie",
    "🎂": "Birthday cake",
    "🍰": "Short cake",
    "🍮": "Custard",
    "🍫": "Chocolate Bar",
    "🍬": "Candy",
    "🍭": "Lollipop",
    "🍠": "Roasted Sweet Potato"
  };

  var dictkeys = Object.keys(sweetList);
  var [sweet, setSweetName] = useState("");

  console.log(dictkeys);
  //function clickEventHandler() {
  // counter = counter + 1;
  //setCounterValue(counter);
  //console.log(counter);
  //}

  function onEmojiInput() {
    var updateInput = event.target.value;
    //setUserInput(updateInput);
    setSweetName(sweetList[updateInput]);
  }
  function onClickEmoji(item) {
    // console.log(item);
    //console.log(fetchedmeaning)
    setSweetName(sweetList[item]);
  }
  return (
    <div className="App">
      <h1 style={{ backgroundColor: bgColor, color: textColor }}>
        {headingText}
      </h1>

      <input
        type="text"
        placeholder="Paste your emoji here/Click below!"
        onChange={onEmojiInput}
        style={{
          padding: "1rem",
          width: "60%",
          backgroundColor: bgColor,
          border: "2px solid #9D174D"
        }}
      />
      <p>{sweet}</p>
      <div className="grid-container">
        {dictkeys.map((item) => {
          return (
            <div
              key={item}
              onClick={() => onClickEmoji(item)}
              style={{
                cursor: "pointer",
                padding: "1rem",
                fontSize: "3rem"
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
