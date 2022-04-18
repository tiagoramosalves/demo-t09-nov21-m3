/*Importações css, bibliotecas, outros componentes */
import { ToastContainer } from "react-toastify";
import "./App.css";
import Routes from "./routes";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {
          <>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <ToastContainer />
            <Routes />
          </>
        }
      </header>
    </div>
  );
}

export default App;
