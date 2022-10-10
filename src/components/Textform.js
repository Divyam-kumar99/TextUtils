import React,{useState} from 'react'

export default function Textform(props) {
    const[text,setText]=useState("")
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
        // let textbox=document.getElementById('myBox');
        // textbox.select();
        navigator.clipboard.writeText(text);
        // textbox.value
        // document.getSelection().removeAllRanges();
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
            <label htmlFor='myBox'  className="form-label"><strong>{props.heading}</strong></label>
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#13466e',
        color: props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
            <button className=" btn btn-primary mx-1 my-1" onClick={handleUpClick} disabled={text.length===0}>Convert text to UpperCase</button> 
            <button className=" btn btn-secondary mx-1 my-1" onClick={handlelowerClick} disabled={text.length===0}>Convert text to LowerCase</button> 
            <button className="btn btn-primary mx-1 my-1" onClick={handleCopy} disabled={text.length===0}>Copy Text</button> 
            <button className=" btn btn-danger mx-1 my-1" onClick={clear} disabled={text.length===0}>Clear</button>  
            <button className=" btn btn-success mx-1 my-1" onClick={removeSpaces} disabled={text.length===0}>Remove extra spaces</button>  



        </div>
        <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{
                return element.length!==0
            }).length} Words in your text & {text.length} characters</p>
            <p>{0.008*text.split(" ").filter((element)=>{
                return element.length!==0
            }).length} Min to read this article</p>
            <h2>Article Preview</h2>
            <p>{text.length>0?text:"Enter Your Text to Preview..."}</p>
        </div>
    </>
  )
}
