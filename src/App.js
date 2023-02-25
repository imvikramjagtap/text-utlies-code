import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './Components/About';
import Alert from './Components/Alert';
import Home from './Components/Home';
import Navbar from './Components/Navbar';


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (massage, type)=>{
    setAlert({
      msg: massage,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toogleMode = ()=> {
     if(mode === "dark"){
       setMode("light")
       showAlert("Light mode enabled", "success" )
     }else{
       setMode("dark")
       showAlert("Dark mode enabled", "success" )
     }
   }


  return (
    
        <div className={`App bg-${mode} text-${mode==="light"?"dark" : "light"}`}>
          <Router>
            <Navbar title="Textutlies" mode={mode} toogleMode={toogleMode}/>
            <Alert alert={alert}/>
                <Routes>

                  <Route exact path="/" element={<Home inputHead="Enter your Text" mode={mode} toogleMode={toogleMode} showAlert={showAlert}/>}/>
              
                  <Route exact path='/About' element={<About mode={mode} toogleMode={toogleMode}/>}/>
                
                      
                  
                </Routes>
          </Router>
        </div>
    
   
  );
}

export default App;
