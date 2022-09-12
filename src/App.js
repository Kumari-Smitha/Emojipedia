import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [meaning, setMeaning] = useState("");
  const emojipedia = {
    "🤪": "Zany Face",
    "🤑": "Money-Mouth Face",
    "🤫": "Shushing Face",
    "🤔": "Thinking Face",
    "🤐": "Zipper-Mouth Face",
    "😐": "Neutral Face",
    "😑": "Expressionless Face",
    "🤥": "Lying Face",
    "😪": "Sleepy Face",
    "🤤": "Drooling Face"
  };

  const emojiArray = Object.keys(emojipedia);

  const showMeaning = (emoji) => {
    var emojiMeaning = emojipedia[emoji];
    setMeaning(emojiMeaning);
  };

  const handleChange = (e) => {
    var inputEmoji = e.target.value;
    var emojiMeaning = emojipedia[inputEmoji];
    if (emojiMeaning === undefined) {
      emojiMeaning = "Sorry! could not find it in database.";
    }
    setMeaning(emojiMeaning);
  };

  return (
    <>
    <div className="App">
      <div className="center">
      <div className="emojipedia">
        <h1>Emojipedia</h1>
        <img
          style={{height:"3rem",marginTop:"1rem"}}
          src="https://emojipedia.org/static/react/ff509f29082399ee2d73a47adbb33c47.png"
          alt="emojipedia"
        />
      </div>
      <br></br>
      <input onChange={handleChange} placeholder="Search Emojipedia"/>
      <p style={{fontSize:"1.5rem"}}><strong>{meaning}</strong></p>
      <h4>Emojis already you know</h4>
      {emojiArray.map((emoji) => {
        return (
          <span
          
            key={emoji}
            style={{ cursor: "pointer", fontSize: "2.5rem" }}
            onClick={() => showMeaning(emoji)}
          >
            {emoji}
          </span>
        );
      })}
      </div>
    </div>
    <footer className='footer'>
      <p className="footerText">© | 2022 | Kumari Smitha</p>
      <ul>
        <li><a href="https://github.com/Kumari-Smitha"><img src="github.png" alt="github"/></a></li>
        <li><a href="https://github.com/Kumari-Smitha"><img src="linkedin.png" alt="linkedin"/></a></li>
        <li><a href="https://github.com/Kumari-Smitha"><img src="twitter.png" alt="twitter"/></a></li>
      </ul>
    </footer>
    </>
  );
}
