import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";

// layouts
import MainLayout from "./layouts/MainLayout";

// pages
import AboutMe from "./pages/portfolio/AboutMe";
import Skills from "./pages/portfolio/Skills";
import MyWork from "./pages/portfolio/MyWork";
import Resume from "./pages/portfolio/Resume";
import ContactMe from "./pages/portfolio/ContactMe";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <MainLayout>
              <AboutMe />
            </MainLayout>
          )}
        />
        <Route
          path="/skills"
          render={() => (
            <MainLayout>
              <Skills />
            </MainLayout>
          )}
        />
        <Route
          path="/work"
          render={() => (
            <MainLayout>
              <MyWork />
            </MainLayout>
          )}
        />
        <Route
          path="/resume"
          render={() => (
            <MainLayout>
              <Resume />
            </MainLayout>
          )}
        />
        <Route
          path="/contact"
          render={() => (
            <MainLayout>
              <ContactMe />
            </MainLayout>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
