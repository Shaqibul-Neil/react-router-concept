import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import App from "./App.jsx";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Mobiles from "./components/Mobiles/Mobiles.jsx";
import Laptops from "./components/Laptops/Laptops.jsx";
import User from "./components/Users/User.jsx";
import User2 from "./components/User 2/User2.jsx";
import UserDetails from "./components/UserDetails/UserDetails.jsx";

const userPromise = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "mobiles", Component: Mobiles },
      { path: "laptops", Component: Laptops },
      {
        path: "users",
        Component: User,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "users2",
        element: (
          <Suspense fallback={<span>Loading....</span>}>
            <User2 userPromise={userPromise}></User2>
          </Suspense>
        ),
      },
      {
        path: "users/:userId",
        Component: UserDetails,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params}`),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
