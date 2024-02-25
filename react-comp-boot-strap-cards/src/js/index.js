//import { jpaylod } from "./payload.js";

 import CreateBook from "./createbook";
 import React from "react";
 import ReactDOM  from "react-dom/client";

//const data = jpaylod.books;
CreateBook();
 const root = ReactDOM.createRoot(document.getElementById('book'));
 root.render(<CreateBook/>);