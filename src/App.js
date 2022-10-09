import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import {
  BrowserRouter ,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const[mode,setMode]=useState('light');//initially dark mode is disabled\
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode=()=>{
    if(mode==='dark'){
      setMode("light");
      document.body.style.backgroundColor="white";
      document.title="TextUtils -Home";
      showAlert("Dark Mode disabled","success");
    }else{
      setMode("dark");
      document.body.style.backgroundColor="black";
      document.title="TextUtils -Dark Mode";
      showAlert("Dark Mode Enabled","success");
      setInterval(() => {
      document.title="TextUtils -Dark Mode";
      }, 2500);
      setInterval(() => {
        document.title="Install TextUtils now";
        }, 1500);
    }
  }


  return (
    <>
    {/* jsx fragment */}
    <BrowserRouter>
      <Navbar title="title" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
        <Switch>

          <Route exact path="/about" component={About}/>
            
          
          <Route exact path="/">
            <Textform heading="Enter the Required Text" mode={mode} showAlert={showAlert}/>          
          </Route>

        </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
