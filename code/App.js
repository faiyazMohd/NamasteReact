import React from "react";
import ReactDOM from "react-dom/client";
const heading1 = React.createElement(
  "h1",
  { id: "heading1", className: "heading1", key: "h1" },
  "Heading1"
);
const heading2 = React.createElement(
  "h2",
  { id: "heading2", className: "heading2", key: "h2" },
  "Heading2"
);
console.log(heading1);
console.log(heading2);

const div2 = React.createElement(
  "div",
  { id: "innerContainer", className: "innerContainer" },
  [heading1, heading2]
); //we can pass multiple children/elements in an array
const div = React.createElement(
  "div",
  { id: "outerContainer", className: "outerContainer" },
  div2
);
const root = ReactDOM.createRoot(document.getElementById("root"));
const heading = (
  <h1 id="title" key="h1">
    Hello World
  </h1>
);

const HeaderComponent = ()=>
  (
    <React.Fragment >
    <div>
      Hola
    </div>
    <div>
      {heading}
      <h1>Namaste React</h1>
    </div>
    </React.Fragment>
  )

// root.render(div);
// root.render(heading);
root.render(<HeaderComponent/>)
