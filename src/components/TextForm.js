import React , {useState} from 'react'
import './prince.css';
export default function TextForm() {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleDownClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handleCopy=()=>{
        var text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const [text,setText]=useState('Enter Text Here');
  return (
    <>
    <div>
      <div class ="mb-3 my-2">
         <label for="myBox"   className ="form-label my-5"><h1>Welcome to India's First Text Analyzer</h1></label>
        <textarea class="form-control"   value={text} onChange={handleOnChange} id="mybox" rows="10"></textarea>
      </div>
      <button className="btn btn-dark mx-3" onClick={handleUpClick}>To Upper Case</button>
      <button className="btn btn-dark mx-3" onClick={handleDownClick}>To Lower Case</button>
      <button className="btn btn-dark mx-3" onClick={handleCopy}> Copy Text</button>
      <button className="btn btn-dark mx-3" onClick={handleExtraSpaces}>Remove Extra Space</button>
    </div>
    <div className="container  ">
        
        <div className="Tera my-5 ">
        <h3>Text Summary</h3>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes will take to read </p>
        </div>
        <h3> Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
