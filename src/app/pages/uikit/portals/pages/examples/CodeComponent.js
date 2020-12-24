import React from 'react';
import Code from 'react-code-prettify';

const txtCode = `

`
function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
export function ExampleComponentCodeSnippet(){

    return <Code
        codeString={htmlEntities(txtCode)} 
        language="javascript" 
    />
}
