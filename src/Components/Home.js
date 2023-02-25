import React,{useState} from "react";



function Home(props) {
    const [text, setText]= useState("")

    const handleLowClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to Lower Case", "success")
    }

    const handleUpClick = ()=>{
       setText(text.toUpperCase());
       props.showAlert("Converted to Upper Case", "success")
    }

    const handleChange =(e) => {
        setText(e.target.value);
    }

    const clerSheet = () => {
     setText("");
     props.showAlert("Sheet cleared", "success")
    }

    const extraSpaceRemover =() =>{
       let newText = text.split(/[ ]+/);
       setText(newText.join (" "));
       props.showAlert("Extra spaces removed", "success")
    }

    const copyHandlar = () => {
        let text = document.getElementById("input-text");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard", "success")
    }

    const readTime =() => {
      
      if(text.length > 0){
        return (`${0.008 * text.split(" ").length} Min read`)
      }else{
        return ("Enter text in above box to get the read time")
      }
    }



  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1>{props.inputHead}</h1>
          <textarea
            className={`form-control bg-${props.mode} text-${props.mode==="dark"? "light" : "dark"}`}
            id="input-text"
            rows="5"
            value={text}
            onChange={handleChange}
            placeholder="Enter text here."
          ></textarea>
        </div>
        <button className={`btn btn-${props.mode==="light"? "primary" : "secondary"} m-3`} onClick={handleUpClick}>
          Convert to Upper Case
        </button>
        <button className={`btn btn-${props.mode==="light"? "primary" : "secondary"} m-3`} onClick={handleLowClick}>
          Convert to Lower Case
        </button>
        <button className={`btn btn-${props.mode==="light"? "primary" : "secondary"} m-3`}onClick={extraSpaceRemover}>
          Remove extra spaces
        </button>
        <button className={`btn btn-${props.mode==="light"? "primary" : "secondary"} m-3`} onClick={copyHandlar}>
          Copy text
        </button>
        <button className={`btn btn-${props.mode==="light"? "primary" : "secondary"} m-3`} onClick={clerSheet}>
          Clear Sheet
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text summery</h2>
        <p className="text-success">
          {`${text.length > 0 ? text.split(" ").length : 0} words and ${text.length > 0 ? text.length : 0} characters`}
        </p>
        <p className="text-success">{readTime()}</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text:"Enter text in above box to preview it here."}</p>
      </div>
    </>
  );
}

export default Home;
