import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./Contact";
import EditContact from "./EditContact";
import ErrorPage from "./Error-page";
import Root from "./Root";
import "./index.css";
import {
  createContactAction,
  deleteContactAction,
  getContactLoader,
  getContactsLoader,
  updateContactAction,
} from "./loaders & actions/contactsLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: getContactsLoader,
    action: createContactAction,
    children: [
      {
        index: true,
        element: <h2> Hello this is the main page</h2>,
      },
      {
        path: "/contacts/:contactId",
        element: <Contact />,
        loader: getContactLoader,
      },
      {
        path: "/contacts/:contactId/edit",
        element: <EditContact />,
        loader: getContactLoader,
        action: updateContactAction,
      },
      {
        path: "/contacts/:contactId/destroy",
        action: deleteContactAction,
        errorElement: (
          <h3>Oops there was an error</h3>
        ) /*contexual error for this  */,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
