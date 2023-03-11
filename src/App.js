// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import './index.css'
import { Suspense } from 'react';

import Generateimage from './compnonents/Imagegenerate';




function App(){
    // const repo = repositoryName

    return(
      
      <Router>
        <Suspense fallback={<div>Please wait...</div>}>
      <div className='App'>
        <Routes>
            <Route path="/" element={<Generateimage />} />
        </Routes>
      </div>
      </Suspense>
    </Router>

    )

}



export default App;
