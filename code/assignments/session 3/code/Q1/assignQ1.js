import React from "react";
import ReactDOM from "react-dom/client";
// const container = React.createElement("div", { id: "container" }, [
//   React.createElement("h1",
//   { className: "title" ,key:"h1"},
//   "Namaste React"),
//   React.createElement("h2",
//   { className: "title",key:"h2" },
//   "Namaste React"),
//   React.createElement("h3",
//   { className: "title",key:"h3" },
//   "Namaste React")
// ]);

const Title  = ()=>(
  <h1>Namaste React</h1>
)
const Author  = ()=>(
<h3 key="h3">Faiyaz Mohamed</h3>
)

const Container = ()=> (
  <div id="container">
    {Title()}
    <h2 key="h2">By...</h2>
    <Author/>
  </div>
)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Container></Container>)