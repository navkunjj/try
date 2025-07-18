import React, { useState } from "react";

function Textform(props) {
  const [text, setText] = useState("");
  const upperCase = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase", "success");
  }
   const lowerCase = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase", "success");
  }
const copy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard", "success");
}
const paste = async () => {
  
        const clipboardText = await navigator.clipboard.readText();
        setText(text + clipboardText);
        props.showAlert("Pasted from clipboard", "success");
}

const clearAll = () =>{
    setText("");
    props.showAlert("Cleared all text", "success");
}
const removeSpace = () => {
  setText(text.replace(/\s+/g, ' ').trim());
  props.showAlert("Removed extra spaces", "success");
}



  return (
    <div className="container my-3">
      <h1>Enter Text Here</h1>
      <div className={`form-floating `}>
        <textarea
          className="form-control my-3"
          placeholder="Leave a comment here"
          id="floatingTextarea"
          value={text}
          onChange={(e)=>{
            setText(e.target.value);
          }}
        ></textarea>
        <label htmlFor="floatingTextarea">Type here</label>
      </div>
      <div className="container">
        <div className="container">
        <button type="button" className="btn btn-primary" onClick={upperCase}>convert to upper case</button>
        <button type="button" className="btn btn-primary mx-2" onClick={lowerCase}>convert to lower case</button>
        <button type="button" className="btn btn-primary my-2 mx-2" onClick={copy}>copy</button>
        <button type="button" className="btn btn-primary mx-2" onClick={paste}>Paste</button>
        <button type="button" className="btn btn-primary mx-2" onClick={clearAll}>clear all</button>
        <button type="button" className="btn btn-primary" onClick={removeSpace}>remove extra space</button>
      </div>
      <h4 className="my-3">
        {text.length} characters and {text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length} words
      </h4>
      <h6 className="my-1">{(text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length)*0.33 } minutes to read</h6>
      <h3>preview</h3>
      <p>{text}</p>
      </div>
    </div>
  );
}

export default Textform;
