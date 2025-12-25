import { MyExpenses } from "../pages/my-expenses";
import { LayoutHeader } from "../shared/ui/header";
import { StyledLayout } from "./styles";
import { store } from "../shared/store";
import { Provider } from "react-redux";

function App() {
  return <Provider store={store}>
    <StyledLayout>
      <LayoutHeader />
      <MyExpenses />
    </StyledLayout>
  </Provider>;
};

export default App;
