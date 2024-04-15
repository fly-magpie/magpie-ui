// src/App.js
import React from "react";
import "@fontsource/poiret-one/400.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar"; // Ensure this is the correct path
import EditorPage from "./pages/EditorPage"; // Ensure this is the correct path
import SourcePage from "./pages/SourcePage";
import NavigationBar from "./components/NavBar";
import PlaceholderPage from "./pages/PlaceHolderPage";
import SideMenu from "./components/SideBar";
// import SchemaBuilder from "./pages/SchemaBuilder";
import Assistant from "./pages/Assistant";

import Theme from "./theme";

function App() {
  return (
    <ChakraProvider theme={Theme}>
      <Router>
        <NavigationBar />
        {/* <SideMenu /> */}
        <Routes>
          <Route path="/" element={<SearchBar />} />
          <Route path="/data-sources" element={<SourcePage />} />
          <Route
            path="/notebooks"
            element={
              <PlaceholderPage
                name={"Notebooks"}
                details={
                  "This page lists all the notebooks while will help you build the visual component"
                }
              />
            }
          />
          <Route
            path="/queries"
            element={
              <PlaceholderPage
                name={"Queries"}
                details={
                  "This page list all queries which you have created in notebooks , these queries are reusable across multiple notebooks "
                }
              />
            }
          />
          <Route
            path="/components"
            element={
              <PlaceholderPage
                name={"Visual Components"}
                details={
                  "This page list all the visual components generated using the notebook"
                }
              />
            }
          />
          <Route
            path="/research"
            element={
              <PlaceholderPage
                name={"Research"}
                details={
                  "This page lists all the ongoing feature development and roadmap of Magpie"
                }
              />
            }
          />
          <Route
            path="/datastores"
            element={
              <PlaceholderPage
                name={"Datastore"}
                details={
                  "This page list all the datastores created by user which can be used in notebook"
                }
              />
            }
          />
          <Route path="/assistant" element={<Assistant />} />
          <Route path="/components/editor" element={<EditorPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
