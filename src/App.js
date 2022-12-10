import "./App.css";
import AppRouter from "./components/router-components/AppRouter";

// App router is the only component imported to the App.js because it returns both the AboutPage and Assignment page
function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
