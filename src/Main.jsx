import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrimeLayout from "./components/PrimeLayout";
import Home from "./components/Home";
import Timeline from "./components/Timeline";
import Stats from "./components/Stats";
import ErrorPage from "./components/ErrorPage";
import People from "./components/People";
import PrimeProvider from "./customjs/PrimeProvider";
import { Toaster } from "react-hot-toast";

const appRouter = createBrowserRouter([
  {
    path: "/",
    Component: PrimeLayout,
    children: [
      { index: true, Component: Home },
      { path: "timeline", Component: Timeline },
      { path: "stats", Component: Stats },
      {
        path: "friend/:id",
        loader: async ({ params }) => {
          const response = await fetch("/people.json");
          const allPeople = await response.json();
          for (let i = 0; i < allPeople.length; i++) {
            if (allPeople[i].id === parseInt(params.id)) {
              return allPeople[i];
            }
          }
          return {};
        },
        Component: People,
      },
      { path: "*", Component: ErrorPage },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PrimeProvider>
      <Toaster />
      <RouterProvider router={appRouter} />
    </PrimeProvider>
  </StrictMode>
);