import { BrowserRouter } from "react-router";
import './index.css';
import { AuthorizationPage } from "../pages/authorization-page";

function App() {
  return (
    <BrowserRouter>
      <AuthorizationPage />
    </BrowserRouter>
  )
};

export default App;
