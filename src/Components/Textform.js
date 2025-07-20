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
    <div className="container my-3"
      style={{ color: props.mode === "dark" ? "white" : "black" }}>
      <h1>Enter Text Here</h1>
      <div className={`form-floating `}>
        <textarea
          className="form-control my-3"
         placeholder="write here"
          id="floatingTextarea"
          value={text}
          onChange={(e)=>{
            setText(e.target.value);
          }}
          style={{ backgroundColor: props.mode === "dark" ? "#0009" : "white", color: props.mode === "dark" ? "white" : "black" }}
        ></textarea>
        
      </div>
      <div className="container">
        <div className="container">
        <button type="button" className="btn btn-primary my-1" onClick={upperCase}>convert to upper case</button>
        <button type="button" className="btn btn-primary mx-2 my-1" onClick={lowerCase}>convert to lower case</button>
        <button type="button" className="btn btn-primary my-2 mx-2 my-1" onClick={copy}>copy</button>
        <button type="button" className="btn btn-primary mx-2 my-1" onClick={paste}>Paste</button>
        <button type="button" className="btn btn-primary mx-2 my-1" onClick={clearAll}>clear all</button>
        <button type="button" className="btn btn-primary my-1" onClick={removeSpace}>remove extra space</button>
      </div>
      <h4 className="my-3">
        {text.length} characters and {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words
      </h4>
      <h6 className="my-1">{(text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length)*0.33 } minutes to read</h6>
      <h3>preview</h3>
      <p>{text}</p>
      </div>
    </div>
  );
}

export default Textform;
