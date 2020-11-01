import React, { useState, useEffect } from "react";
import "./App.css";
import Messages from "./Components/Messages";
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  IconButton,
} from "@material-ui/core";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState("");
  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);
  useEffect(() => {
    setUserName(prompt("Enter Your Chating Name"));
  }, []);
  const setMessage = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      message: input,
      username: userName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="App">
      <img
        src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"
        alt="nothing"
      />
      <h1 className="app__name">Messenger App</h1>
      <p className="app__username">
        Welcome {userName ? userName : "Unknown User"}
      </p>
      <form className="app__form">
        <FormControl className="app__formControl">
          <InputLabel>Enter a message...</InputLabel>
          <Input
            className="input"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <IconButton
            className="button"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={setMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Messages key={id} username={userName} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
