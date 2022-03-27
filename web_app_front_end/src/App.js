import './App.css';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
        {/* Login tag will embed entire login component inside app.js i.e. the entire User Interface of the login page willbe displayed */}
        <Login/>
    </div>

  );
}

export default App;
