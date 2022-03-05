
import './App.css';
import Navbar from "./component/Navbar";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import Home from "./component/Home";
import Scores from "./component/Scores"
import Clan from "./component/Clan"
import CreateWarlord from "./component/CreateWarlord"
import Messages from "./component/Messages"
import Manage from "./component/Manage"
import Search from "./component/Search"
import Turns from "./component/Turns"
import Mercenaries from "./component/Mercenaries"
import Market from "./component/Market"
import Bank from "./component/Bank"
import Aid from "./component/Aid"
import Warlord from "./component/Warlord"
import Missions from "./component/Missions"
import Construct from "./component/Construct"

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

  if (!user) return <SignUp onLogin={setUser}/>;


  return (
    <div className="App">
      
      <Router>
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<CreateWarlord user={user} />} />
          <Route path="/summary" element={<Home user={user} />} />
          <Route path="/signin" element={<SignIn onLogin={setUser} />} />
          <Route path="/signup" element={<SignUp onLogin={setUser} />} />
          <Route path="/createwarlord" element={<CreateWarlord user={user}/> } />
          <Route path="/messages" element={<Messages user={user}/>} />
          <Route path="/manage" element={<Manage user={user}/>} /> 
          <Route path="/scores" element={<Scores user={user}/>} />
          <Route path="/search" element={<Search user={user}/>} />
          <Route path="/turns" element={<Turns user={user}/>} />
          <Route path="/construct" element={<Construct user={user}/>} />
          <Route path="/mercenaries" element={<Mercenaries user={user}/>} />
          <Route path="/market" element={<Market user={user}/>} />
          <Route path="/bank" element={<Bank user={user}/>} />
          <Route path="/aid" element={<Aid user={user}/>} />
          <Route path="/clan" element={<Clan user={user}/>} />
          <Route path="/warlord" element={<Warlord user={user}/>} />
          <Route path="/missions" element={<Missions user={user}/>} />

        </Routes>
      </Router>
      </div>

  );
}

export default App;
