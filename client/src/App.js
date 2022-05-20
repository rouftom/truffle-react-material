import React, { Suspense } from "react";
import './App.css';
import CircularLoaderUI from "./ui/CircularLoaderUI.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const HomeAppBarLayout = React.lazy(
  () => import("./ui/HomeAppBarLayout.jsx")
);
const Home = React.lazy(() => import("./ui/Home.jsx"));
const NotFound = React.lazy(() => import("./ui/NotFound.jsx"));

function App() {
  return (
    <Suspense fallback={<div><CircularLoaderUI /></div>}>
      <Router>
        <HomeAppBarLayout />
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route exact path={"*"} element={<NotFound/>}/>
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
