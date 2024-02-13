import React,{useState} from 'react'


export default function TextForm (props) {
    
    const handleClearClick = ()=>{
        let clearText = '';
        setText(clearText);
        props.showAlert("Cleared text","success")
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase()
        setText(newText);
        props.showAlert("Converted to lowercase","success")
      }
    
    const handleUpClick = ()=>{
        let newText = text.toUpperCase()
        setText(newText);
        props.showAlert("Converted to uppercase","success")
      }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }


    const [text,setText] = useState('');
    return (
        <>
        <div className='container' style={{backgroundColor:props.mode==='light'?"white":"#032c69",color:props.mode==='light'?"black":"white"}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?"white":"grey",color:props.mode==='light'?"black":"white"}} rows="8"></textarea>
            </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>  
                <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to lowercase</button>
                <button className="btn btn-primary" onClick={handleClearClick}>Clear</button>
        </div>
        <div className='container my-3'style={{backgroundColor:props.mode==='light'?"white":"#032c69",color:props.mode==='light'?"black":"white"}}>
            <h2>Your text summary</h2>
            <p>{text.split(' ').length-1} words and {text.length} characters</p>
            <p>{0.008*text.split(' ').length} Minutes read</p>
            <p>{text.length>0?text:"Enter the text"}</p>
        </div>
        </>
  )
}

