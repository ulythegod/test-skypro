import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router";

import "./index.css";

import { store } from "../shared/store";
import { routes } from "./routes";

function App() {
  const router = createBrowserRouter(routes);

  return <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>;
};

export default App;
