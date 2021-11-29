
import './App.css';
import React from 'react';
import Header from './structure-component/Header';
import Body from './structure-component/Body'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render(){
    return(
        <div>
            <Header/>
            <Body/>
        </div>
    )
}
}

export default App;
