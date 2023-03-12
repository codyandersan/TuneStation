import './App.css';
import NavBar from './components/NavBar'
import Trending from './components/Trending/Trending'
import Footer from './components/Footer';
import Search from './components/Search/Search';
import Player from './components/Player/Player';

import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Alert from './components/Alert';
// import Lyrics from './components/Player/Lyrics';


function App() {
  const [progress, setProgress] = useState(0) //progress of loading bar
  const [details, setDetails] = useState(null)
  const [alert, setAlert] = useState(null)

  const showAlert = (message) => {
    setAlert(message)
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  return (
    <>
      <LoadingBar
        color='#ffffff'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className='flex flex-col min-h-[100vh] justify-between	w-full'>
        <Router>
          <NavBar />
          <Alert message={alert} />
          <Routes>

            <Route exact path="/" element={<Trending setProgress={setProgress} />}> </Route>
            {/* <Route exact path="/test" element={<Lyrics />}> </Route> */}
            <Route exact path="/search" element={<Search setProgress={setProgress} setDetails={setDetails} />}> </Route>

            <Route exact path="/listen" element={<Player showAlert={showAlert} setProgress={setProgress} details={details} />}> </Route>

          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
