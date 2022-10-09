import React,{useState} from 'react'

export default function Textform(props) {
    const[text,setText]=useState("Enter the Text here")
    // text="Cannot update this way.shows error";
    const handleUpClick=()=>{
        console.log("handle Upper case Triggered"+ text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");

    }
    const handleOnChange=(event)=>{
        console.log("On Change");
        setText(event.target.value);
       

    }
    const handlelowerClick=(event)=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowerCase","success");
    }
    const clear=(event)=>{
        setText("");
        props.showAlert("Cleared Text","success");

    }
    const handleCopy=()=>{
        let textbox=document.getElementById('myBox');
        textbox.select();
        navigator.clipboard.writeText(textbox.value);
        props.showAlert("Text Copied","success");

    }
    const removeSpaces=()=>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(' '));
        props.showAlert("Extra Spaced removed","success");
    }
   
  return (
    < >
    
        <div className="mb-3 container my-3" style={{color: props.mode==='light'?'black':'white'}}>
            {/* <h1>{text}</h1> */}
            <label htmlFor='myBox'  className="form-label">{props.heading}</label>
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey',
        color: props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
            <button className="mt-2 btn btn-primary" onClick={handleUpClick}>Convert text to UpperCase</button> 
            <button className="mt-2 btn btn-secondary mx-2" onClick={handlelowerClick}>Convert text to LowerCase</button> 
            <button className="mt-2 btn btn-primary" onClick={handleCopy}>Copy Text</button> 

            <button className="mt-2 btn btn-danger " onClick={clear}>Clear</button>  
            <button className="mt-2 btn btn-success " onClick={removeSpaces}>Remove extra spaces</button>  



        </div>
        <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} Words in your text & {text.length} characters</p>
            <p>{0.008*text.split(" ").length} Min to read this article</p>
            <h2>Article Preview</h2>
            <p>{text.length>0?text:"Enter Your Text to Preview..."}</p>
        </div>
    </>
  )
}
