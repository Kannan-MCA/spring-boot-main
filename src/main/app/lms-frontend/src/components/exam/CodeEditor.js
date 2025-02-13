import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

const CodeEditor = ({ language, code, onChange }) => {
  return (
    <div>
      <Editor
        height="400px"
        defaultLanguage={language}
        defaultValue={code}
        onChange={onChange}
      />
    </div>
  );
};

export default CodeEditor;
