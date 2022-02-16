import React from 'react';
import Tree from "./components/tree/Tree";
import data from './components/tree/data';
import './App.css';

function App() {

  const treeData: any[] = data;

  return (
    <div className="App">
      <section>
        <Tree data={treeData} />
      </section>
    </div>
  );
}

export default App;
