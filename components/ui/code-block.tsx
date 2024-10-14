import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface CodeBlockProps {
  value: {
    code: string;
    language?: string;
    filename?: string;
  };
}

export default function CodeBlock({ value }: CodeBlockProps) {
  return (
    <div className="my-4">
      {value.filename && (
        <div className="bg-gray-800 text-gray-200 px-4 py-2 text-sm rounded-t-md">
          {value.filename}
        </div>
      )}
      <SyntaxHighlighter
        language={value.language || 'text'}
        style={atomDark}
        customStyle={{
          margin: 0,
          borderRadius: value.filename ? '0 0 0.375rem 0.375rem' : '0.375rem',
        }}
      >
        {value.code}
      </SyntaxHighlighter>
    </div>
  );
}

