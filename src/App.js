import './App.css';
import NavBar from './components/NavBar'
import Showcase from './components/Showcase/Showcase'
import Footer from './components/Footer';
import Search from './components/Search/Search';
import Player from './components/Player/Player';

import LoadingBar from 'react-top-loading-bar'
import { useEffect, useState } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Alert from './components/Alert';
import AlbumsShowcase from './components/Showcase/AlbumsShowcase';
import PlaylistsShowcase from './components/Showcase/PlaylistsShowcase';
import About from './components/About';
import Terms from './components/Terms';



function App() {
  const [progress, setProgress] = useState(0) //progress of loading bar
  const [details, setDetails] = useState(null)
  const [alert, setAlert] = useState(null)
  const [theme, setTheme] = useState("dark")

  const [albumId, setAlbumId] = useState(null)
  const [playlistId, setPlaylistId] = useState(null)

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("")
      showAlert("Light mode has been enabled.")
    }
    else {
      setTheme("dark")
      showAlert("Dark mode has been enabled.")
      // document.documentElement.classlist.add("dark")
    }
  }

  const showAlert = (message) => {
    setAlert(message)
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  useEffect(() => {
    showAlert("By using TuneStation, you agree to be bound by the Terms of Use.")
  }, [])

  return (
    <div className={theme} >
      <div className="bg-light-100 dark:bg-deep-900">
        
        <LoadingBar
          color='#ff0000'
          progress={progress}
          height={3}
          shadow={false}
          onLoaderFinished={() => setProgress(0)}
        />
        <div className='flex flex-col min-h-[100vh] justify-between	w-full'>
          <Router>
            <NavBar toggleTheme={toggleTheme} theme={theme} />
            <Alert message={alert} theme={theme} />
            <Routes>

              <Route exact path="/" element={<Showcase setAlbumId={setAlbumId} setPlaylistId={setPlaylistId} setProgress={setProgress} theme={theme} setDetails={setDetails} />}> </Route>

              <Route exact path="/about" element={<About theme={theme} />}> </Route>

              <Route exact path="/terms" element={<Terms theme={theme} />}> </Route>

              <Route exact path="/albums" element={<AlbumsShowcase albumId={albumId} setProgress={setProgress} theme={theme} setDetails={setDetails} />}> </Route>

              <Route exact path="/playlists" element={<PlaylistsShowcase playlistId={playlistId} setProgress={setProgress} theme={theme} setDetails={setDetails} />}> </Route>

              <Route exact path="/search" element={<Search setProgress={setProgress} theme={theme} setDetails={setDetails} setAlbumId={setAlbumId} setPlaylistId={setPlaylistId} />}> </Route>

              <Route exact path="/listen" element={<Player showAlert={showAlert} theme={theme} setProgress={setProgress} details={details} />}> </Route>

            </Routes>
            <Footer theme={theme} />
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
