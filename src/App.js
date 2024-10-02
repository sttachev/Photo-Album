import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'react-18-image-lightbox/style.css';
import AlbumPage from "./AlbumPage"
import AllList from './AllList';
import Album1 from './Album1';
import Album2 from './Album2';
import Album3 from './Album3';
import Header from "./Header"
import Favourites from './Favourites';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container-body">
        <Routes>
          <Route path="/" element={<AlbumPage />}>
          </Route>
          <Route
            path="/album1"
            element={<Album1 />}
          >
          </Route>
          <Route
            path="/album2"
            element={<Album2 />}
          ></Route>
          <Route
            path="/album3"
            element={<Album3 />}
          ></Route>
          <Route
            path="/all"
            element={<AllList />}
          >
          </Route>
          <Route
            path="/favourites"
            element={<Favourites />}
          >
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}