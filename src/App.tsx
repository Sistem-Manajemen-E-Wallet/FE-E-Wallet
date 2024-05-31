import { Provider } from "jotai";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";

const App = () => {
  return (
    <BrowserRouter>
      <Provider>
        <Routes />
      </Provider>
    </BrowserRouter>
  );
};

export default App;
