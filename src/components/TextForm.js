import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick= ()=>{
        console.log("Uppercase was clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText)
          props.showAlert("Converted to UpeerCase","success");
    }
    const handleLpClick= ()=>{
        console.log("Lowercase was clicked"+ text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase","success");

    }
    const handleClear= ()=>{
       
        let newText='';
        setText(newText)
        props.showAlert("Text Cleared","success");

    }
    const handleCopy= ()=>{
       
       var text =document.getElementById("myBox");
       text.select();
       navigator.clipboard.writeText(text.value);
       props.showAlert("Text Cpoied","success");

    }
    const handleExtraSpaces= ()=>{
       
        let newText =text.split(/[ ]+/)
        setText(newText.join(" "))
        
 
     }
    const handleOnChange= (event)=>{
        console.log("On change");
        setText(event.target.value)
      

    }
    const [text,setText] =useState('');
    return (
        <>
        <div className="container "  style={{color:props.mode ==='dark'?'white':'black'}}> 
            <h2>{props.heading}</h2>
            <div className="mb-2">
            <textarea className="form-control"  value = {text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode ==='dark'?'grey':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} type="button" className="btn btn-outline-success mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} type="button" className="btn btn-outline-success mx-1 my-1" onClick={handleLpClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} type="button" className="btn btn-outline-success mx-1 my-1" onClick={handleClear}>Clear</button>
            <button disabled={text.length===0} type="button" className="btn btn-outline-success mx-1 my-1" onClick={handleCopy}>CopyText</button>
            <button disabled={text.length===0} type="button" className="btn btn-outline-success mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-2" style={{color:props.mode ==='dark'?'white':'black'}}>
            <h3>Your text Summry</h3>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>
            <h4>Preview</h4>
            <p>{text}</p>

        </div>

        </>
    )
}
