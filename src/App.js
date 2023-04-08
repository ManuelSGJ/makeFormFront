import { BrowserRouter } from "react-router-dom"; 
import Router from "./router";
import GlobalStyle from "./Styles/GlobalStyles";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <GlobalStyle/>
        <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;
