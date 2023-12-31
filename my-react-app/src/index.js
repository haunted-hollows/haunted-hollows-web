import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom' instead of 'react-dom/client'
import {  createBrowserRouter, RouterProvider } from "react-router-dom"
import MainPage from './components/main-page/main-page';
import App from './App';
import Loading from './components/loading/loading';
import PatchNotes from './components/patch-notes-page/patch-notes';
import RoadMap from './components/roadmap-page/roadmap';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <MainPage></MainPage>
      },
      {
        path: "load",
        element: <Loading></Loading>
      },
      {
        path: "patch-notes",
        element: <PatchNotes></PatchNotes>
      },

      {
        path: "roadmap",
        element: <RoadMap></RoadMap>
      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
