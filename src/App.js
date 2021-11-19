
import './App.css';
import Header from './structure-component/Header';
import Body from './structure-component/Body'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const nameBtn = "go"

  return (
    <div className="App">
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
