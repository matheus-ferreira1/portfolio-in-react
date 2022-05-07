import Header from "./components/Header/Header";
import { BrowserRouter } from 'react-router-dom'
import './global.scss'
import Content from "./views/Content";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Content />
      </BrowserRouter>
    </div>
  );
}

export default App;
