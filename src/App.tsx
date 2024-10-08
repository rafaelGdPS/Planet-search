import React from 'react';
import styles from './App.module.css';
import Table from './components/Table';
import Search from './components/Search';

function App() {
  return (
    <main className={ styles.container }>
      <Search />
      <Table />
    </main>
  );
}

export default App;
