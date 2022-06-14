import "./styles.css";
import React, { useState } from "react";

const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "😃":	"grinning face",
"😄":"grinning face with big eyes",
"😁"	: "grinning face with smiling eyes",
"😆":	"beaming face with smiling eyes",
"😅":	"grinning squinting face",
"🤣"	:"grinning face with sweat",


};

var emojiArray = Object.keys(emojiDictionary);

export default function App() {
  var [emoji, setEmoji] = useState("");

  var [meaning, setMeaning] = useState("translation will appear here");

  function emojiChangeHandler(event) {
    var inputEmoji = event.target.value;
    setEmoji(inputEmoji);
    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("Sorry we don't have that Emoji in our Database");
    }
  }
  function emojiClickHandler(emoji) {
    setEmoji(emoji);
    setMeaning(emojiDictionary[emoji]);
  }
  return (
    <div className="App">
      <h1>Welcome to EmojiPedia</h1>
      <input onChange={emojiChangeHandler} value={emoji}></input>
      <div style={{padding: "1rem"}}>{emoji} </div>
      <div> {meaning}</div>

      <ul>
        {emojiArray.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{ paddding: "1rem" }}
              style={{padding:"0.5rem"}}
            >
              {emoji}{" "}
            </span>
          );
        })}
      </ul>
      <footer> Made by a fellow Emoji amateur Yajat Gulati </footer>
    </div>
  );
}
