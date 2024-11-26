import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Global from './screens/Global';
import ProtectedRoute from './components/ProtectedRoute';
import PrivateChat from './screens/PrivateChat';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/globalchat" element={<Global/>}/>
          <Route path="/privatechat" element={<PrivateChat/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
