import logo from './logo.svg';
import './App.css';
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Contact from "./component/Contact";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import NewPost from "./component/NewPost"
import Posts from "./component/Posts"
import Dashboard from "./component/Dashboard"
import Friends from "./component/Friends"
import PostPage from "./component/PostPage"


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
          <Route path='posts/:id' element={<><PostPage user={user} /></>} />
          <Route path="/" element={<><Home user = {user}/></>} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/new" element={<><NewPost user={user}/></>} />
          <Route path="/dashboard" element={<><Dashboard user={user}/></>} />
          <Route path="/friends" element={<><Friends user={user}/></>} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
