import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { Landing } from './pages/landing';
import {Demo} from './pages/demo';
import { Charts } from './pages/charts';
import { SignOn } from './pages/signOn';
// import reportWebVitals from './reportWebVitals';
// import './index.css';

// Router can be commented out now that we have established the backend connection to django 

const router = createBrowserRouter([
  {
    path:"/",
    element: <Landing />,
    errorElement:  <div >404 not found</div>
  
  },
  {
    path:"/demo",
    element: <Demo />,
    errorElement:  <div >404 not found</div>

  
  },
  {
    path:"/news",
    element: <App />,
    errorElement:  <div >404 not found</div>
  },
  {
    path:"/charts",
    element: <Charts />,
    errorElement:  <div >404 not found</div>
  },
  {
    path:"/signOn",
    element: <SignOn />,
    errorElement:  <div >404 not found</div>
  },
 
 


])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider  router={router} />
   </React.StrictMode>
);






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
