import React from 'react';
import './App.css';
import Display from './components/Display';
import EntryDisplay from './components/EntryDisplay';
import TransactionList from './components/TransactionList';

function App() {
  return (
    <div className='App'>
      <div className='Container'>
        <Display/>
        <EntryDisplay/>
        <TransactionList/>
      </div>
    </div>
  );
}

export default App;
