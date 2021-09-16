import React,{useState} from 'react';
import './App.css';
import Counter from './Counter';
import CounterHooks from './CounterHooks';

export const Themecontext = React.createContext();

function App() {
const[theme,setTheme]=useState('red');
  return (
    <Themecontext.Provider value={{backgroundColor:theme}}>
    <div className="App">
      <Counter initialCount={4}/>
      <CounterHooks initialCount={2}/>
      <button onClick ={()=>setTheme(prevTheme=>{
      return prevTheme === 'red'? 'blue':'red'
    })}>Toggle Button </button>
      
    </div>
    
    </Themecontext.Provider>
  );
}

export default App;
