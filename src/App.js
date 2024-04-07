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
// import SchemaBuilder from "./pages/SchemaBuilder";
import Assistant from "./pages/Assiatant";

import Theme from "./theme";

function App() {
  return (
    <ChakraProvider theme={Theme}>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<SearchBar />} />
          <Route path="/data-sources" element={<SourcePage />} />
          <Route path="/pipelines" element={<PlaceholderPage />} />
          <Route path="/queries" element={<PlaceholderPage />} />
          <Route path="/graphs" element={<PlaceholderPage />} />
          <Route path="/research" element={<PlaceholderPage />} />
          <Route path="/datastores" element={<PlaceholderPage />} />
          <Route path="/assistant" element={<Assistant />} />
          <Route path="/pipelines/editor" element={<EditorPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
