// JSONEditorViewer.js
import React, { useState } from "react";
import ReactJson from "react-json-view";
import { Box } from "@chakra-ui/react";

const JSONEditorViewer = ({ initialJson = {}, onJsonChange }) => {
  const [json, setJson] = useState(initialJson);

  const handleChange = (edit) => {
    // Assuming edit.updated_src contains the new JSON
    onJsonChange(edit.updated_src);
  };
  const handleSelect = (select) => {
    // The `select` object contains various properties, including `namespace` which is an array of keys that represents the path to the selected value.
    const parentPath = select.namespace.join(".");
    console.log("Parent path:", parentPath);

    // The `name` is the key of the clicked item.
    const clickedKey = select.name;
    console.log("Clicked key:", clickedKey);

    // If you want to construct a full path including the clicked key
    const fullPath = [...select.namespace, select.name].join(".");
    console.log("Full path:", fullPath);
    // You can do more here, like setting this path in the state, or calling a callback prop passed from the parent component.
  };

  return (
    <Box maxW="100%" overflow="auto" p={4} borderWidth="1px" borderRadius="lg">
      <ReactJson
        src={json}
        // theme="google"
        name={false}
        onEdit={handleChange}
        onSelect={handleSelect}
        // onAdd={handleChange}
        // onDelete={false}
        enableClipboard={false}
        collapsed={2}
        style={{ fontFamily: "Menlo, monospace" }}
      />
    </Box>
  );
};

export default JSONEditorViewer;
