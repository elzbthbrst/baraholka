import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return <div>
   <Header/>
    <main>
        <Outlet/>
    </main>
    <footer>
        footer
    </footer>
  </div>;
}

export default App;
