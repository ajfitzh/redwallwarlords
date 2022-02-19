
import './App.css';
import Navbar from "./component/Navbar";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import Home from "./component/Home"
import Dashboard from "./component/dashboard/Dashboard"



import {
  BrowserRouter as
  Router,
  Route,
  Routes
} from "react-router-dom"
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState(null);
  useEffect(()=> {
    //auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, [])

  if (!user) return <SignUp onLogin={setUser} />;
  return (
    <div className="App">
      
      <Router>
        <Navbar user={user} setUser={setUser} />
        
        <Routes>
          <Route path="/" element={<><Dashboard user={user} /><Home user = {user}/></>} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
