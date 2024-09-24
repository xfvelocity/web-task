import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./assets/styles/generic.scss";

// Redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./store";

// Routes
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/Home";
import Basket from "./routes/Basket";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/basket",
    element: <Basket />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>
);
