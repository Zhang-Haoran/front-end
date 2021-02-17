import './App.css';
import {ConfigureStore} from "./redux/configureStore";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import Main from "./component/MainComponent";

const store = ConfigureStore();
function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <Main/>
          </BrowserRouter>
      </Provider>

  );
}

export default App;
