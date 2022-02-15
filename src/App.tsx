import React from 'react';
import Tree from "./components/tree/Tree";
import './App.css';

function App() {

  const treeData: any[] = [];

  return (
    <div className="App">
      <section>
        <Tree data={treeData} />
      </section>
    </div>
  );
}

export default App;
