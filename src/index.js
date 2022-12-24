import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Table from './components/Table';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path: "Table",
    element: <Table/>,
  },
]);




ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router ={router} />
  </React.StrictMode>,
  document.getElementById("root")
  
);


