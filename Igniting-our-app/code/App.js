import React from 'react';
import ReactDOM from 'react-dom/client';
const heading1 = React.createElement('h1', {id:'heading1',className:"heading1"}, "Heading1");
const heading2 = React.createElement('h2', {id:'heading2',className:"heading2"}, "Heading2");
// console.log(heading);
const div2 = React.createElement('div', {id:"innerContainer",className:"innerContainer"},[heading1,heading2]);//we can pass multiple children/elements in an array
const div = React.createElement('div', {id:"outerContainer",className:"outerContainer"},div2);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(div);
