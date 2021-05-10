import React, { Suspense } from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import CircularLoaderUI from "./components/Loader/CircularLoaderUI.jsx"
import "./app.scss"

const HomeAppBarLayout = React.lazy(() => import("./ui/Layouts/HomeAppBarLayout.jsx"))
const Home = React.lazy(() => import("./ui//Home.jsx"))
const NotFound = React.lazy(() => import("./ui/NotFound.jsx"))

export default function App() {
  return (
    <Suspense fallback={<div><CircularLoaderUI /></div>}>
      <Router>
        <HomeAppBarLayout />
        <Switch>
          <Route path={"/"}>
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </Suspense>
  )
}