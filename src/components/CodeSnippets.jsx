/*
"use client";
import React, { useEffect, useState } from "react";

// Random code snippet generator
const codeSnippets = [
  "const a = 10;",
  "let result = a + b;",
  "function greet() { return 'Hello'; }",
  "const isValid = true;",
  "for (let i = 0; i < 10; i++) {}",
  "console.log('Debugging');",
  "const fetchData = async () => {};",
  "if (condition) { doSomething(); }",
  "class Person { constructor(name) { this.name = name; } }",
  "const sum = (x, y) => x + y;",
];

const createCodeSnippet = () => codeSnippets[Math.floor(Math.random() * codeSnippets.length)];

const TerminalCodeDisplay = () => {
  const [terminalContent, setTerminalContent] = useState([]);

  useEffect(() => {
    const addSnippetPeriodically = () => {
      const newSnippet = createCodeSnippet();
      setTerminalContent((currentContent) => [
        ...currentContent,
        newSnippet,
      ]);
    };

    const interval = setInterval(addSnippetPeriodically, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-[400px] h-[300px] bg-black text-green-500 p-4 font-mono rounded-lg overflow-y-auto shadow-lg"
         style={{ border: "2px solid #0f0", boxShadow: "0 0 10px rgba(0, 255, 0, 0.5)" }}
    >
      <div className="mb-4 text-sm">
        <p>$ Initializing Terminal...</p>
        <p>$ Generating code snippets...</p>
      </div>
      <div className="text-sm">
        {terminalContent.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
};

export default TerminalCodeDisplay;
*/