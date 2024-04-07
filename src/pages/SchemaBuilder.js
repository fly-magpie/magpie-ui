import React, { useState } from "react";
// import { render } from "react-dom";
import AceEditor from "react-ace-builds";
import "react-ace-builds/webpack-resolver-min";

import { Box, Flex } from "@chakra-ui/react";

function SchemaBuilder() {
  const [jsonInput, setJsonInput] = useState(null);
  const [jsonOutput, setJsonOutput] = useState(null);

  return (
   <Flex p={10}  h="100vh">
      <AceEditor
        mode="json"
        theme="monokai"
        onChange={setJsonInput}
        name="input-editor"
        editorProps={{ $blockScrolling: true }}
        value={jsonInput}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
        style={{ width: "50%" }}
      />
      <AceEditor
        mode="json"
        theme="monokai"
        onChange={setJsonOutput}
        name="output-editor"
        editorProps={{ $blockScrolling: true }}
        value={jsonOutput}
        readOnly
        setOptions={{
          enableBasicAutocompletion: false,
          enableLiveAutocompletion: false,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
        }}
        style={{ width: "50%" }}
      />
    </Flex>
  );
}

export default SchemaBuilder;
