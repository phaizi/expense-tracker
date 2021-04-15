import React, { createContext, useReducer, } from 'react';
import './App.css';
import Display from './components/Display';
import EntryDisplay from './components/EntryDisplay';
import TransactionList from './components/TransactionList';
import transact from './services/transact';
import { Context, Action } from './services/types';

const transactions = createContext<[Context, React.Dispatch<Action>] | undefined>(undefined);

function App() {

  const [state, dispatch] = useReducer(transact, { entries: [], income: 0, expense: 0 })

  return (
    <div className='App'>
      <div className='Container'>
        <transactions.Provider value={[state, dispatch]}>
          <Display />
          <EntryDisplay />
          <TransactionList />
        </transactions.Provider>
      </div>
    </div>
  );
}

export default App;
export { transactions };