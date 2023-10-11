import "./App.css";
import News from "./componenets/News";
import LoadingBar from "react-top-loading-bar";

import React, { useState } from "react";
import NavBAr from "./componenets/NavBAr";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const App = () => {
  const API_KEY = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);
 


  return (
    <div>
      <LoadingBar height={4} color="#f11946" progress={progress} />
      <Router>
        <NavBAr />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                api={API_KEY}
                pagesize={6}
                country="in"
                category="general"
              />
            }
          ></Route>
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                api={API_KEY}
                key="business"
                pagesize={6}
                country="in"
                category="business"
              />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                api={API_KEY}
                key="entertainment"
                pagesize={6}
                country="in"
                category="entertainment"
              />
            }
          ></Route>

          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={setProgress}
                api={API_KEY}
                key="general"
                pagesize={6}
                country="in"
                category="general"
              />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                api={API_KEY}
                key="health"
                pagesize={6}
                country="in"
                category="health"
              />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                api={API_KEY}
                key="science"
                pagesize={6}
                country="in"
                category="science"
              />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                api={API_KEY}
                key="sports"
                pagesize={6}
                country="in"
                category="sports"
              />
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                api={API_KEY}
                key="tehnology"
                pagesize={6}
                country="in"
                category="technology"
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
