import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Answer from './components/Answer';

// jsx code xml inside JS

function App() {

  let info = [
    {Name:"Sri", place:"Srikakulam"},
    {Name:"Srinika", place:"Srikakulam"},
    {Name:"Jai", place:"Indore"},

  ]

  return (
    <div className="App">
     
        <Hello> </Hello>
       { info.map((user)=>(
         <Answer {...user}/>
        ))}       
              
    </div>
  );
}

export default App;
