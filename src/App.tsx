import React, { createContext, useReducer, } from 'react';
import './App.css';
import Display from './components/Display';
import EntryDisplay from './components/EntryDisplay';
import TransactionList from './components/TransactionList';
import transact from './services/transact';
import { Context, Action } from './services/types';
// state: InitialStateType;
// dispatch: React.Dispatch<any>;
//  const tr = createContext({a:'sg'});
//  const [st,dis] = useReducer((state:{a:string},action:{'type':string})=>state,{a:'sg'})
// ************** faltu oopar k coments
// let transactions : React.Context<[{ entries: Entry[];income: number;expense: number;}, React.Dispatch<{type: string;entry: Entry;}>]>
// var red:[{ entries: Entry[];income: number;expense: number;},React.Dispatch<{type: string;entry: Entry;setId:(value: React.SetStateAction<number>) => void}>]
// let trycon :React.Context<number>
const transactions = createContext<[Context,React.Dispatch<Action>]|undefined>(undefined);

function App() {
  // const [trry, sett] = useState(0);
  // console.log('this is app state = ',trry);
  // console.log('this is creatcontext = ',transactions)
   const [state, dispatch] = useReducer(transact,{entries:[],income:0,expense:0})
  // let st = useState(11);
  // transactions = createContext<[{entries:Entry[],income:number,expense:number},React.Dispatch<{type: string;entry: Entry;}>]>([state,dispatch]);
  // console.log('RED', state)
  // trycon = createContext(5);
  return (
    <div className='App'>
      <div className='Container'>
        {/* <trycon.Provider value={5}> */}
{/* <button onClick={()=>{sett(trry+1)}}>app change</button> */}
        <transactions.Provider value={[state,dispatch]}>
        <Display/>
        <EntryDisplay 
                // asd={state} dpatch={dispatch}
        />
        <TransactionList/>
        {/* </trycon.Provider> */}
        </transactions.Provider> 
      </div>
    </div>
  );
}

export default App;
 export {transactions}
//  export {trycon}
// export{useState(235)}