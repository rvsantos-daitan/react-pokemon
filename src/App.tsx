import { Provider } from "react-redux";
import { store } from "./store";
import Main from "./pages/main";
import { FocusProvider } from "./contexts/focuscontext";

function App() {


  return (
    <Provider store={store}>
      <FocusProvider>
        <Main />
      </FocusProvider>
    </Provider>
  );
}

export default App;
