import React,{Component} from 'react';
import './App.css';
import People from './People';

class App extends Component {
 render() { 
  return (
    <div className="App">
        <h2 style={{textAlign: "center"}}>People List</h2>
        <People />
    </div>
  );
  }

}

export default App;