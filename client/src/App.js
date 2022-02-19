import logo from './logo.svg';
import './App.css';
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Contact from "./component/Contact";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import NewPost from "./component/NewPost"
import Posts from "./component/Posts"
import Dashboard from "./component/dashboard/Dashboard"
import Friends from "./component/Friends"
import PostPage from "./component/PostPage"
import FriendPage from "./component/FriendPage"


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
          <Route path="/" element={<><Dashboard user = {user}/></>} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
