import { BrowserRouter } from "react-router-dom"; 
import Router from "./router";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;
