import React ,{useState} from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from "./component/About"
// import Card from './component/Card';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchResults from './component/SearchResults';

const App = () => {
  const [searchvalue, setsearchvalue] = useState("");
  const abd=(val)=>{
    setsearchvalue(val)
};
  return (
    <>
      <Router>
        <Navbar heading="News by Awdhesh Mishraa"  searchT={abd}/>
        <div className="box">
        {/* <div className="heading">
          Awdhesh news
        </div> */}
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='/About'element={<About/>}/>
          <Route path='/search'element={<SearchResults searchText={searchvalue}/>}/>
        </Routes>
        </div>
      </Router>
    </>
  )

};


export default App;
