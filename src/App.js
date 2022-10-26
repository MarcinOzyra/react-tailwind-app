import React, { useState } from 'react';
import Entries from './components/Entries';
import Form from './components/Form';

function App() {
  const [entries, setEntries] = useState([]);

  const addEntryHandler = (entry) => {
    setEntries((prevValue) => {
      const updateEntries = [...entries];
      updateEntries.push({ id: Math.random().toString(), entry: entry });
      return updateEntries;
    });
  };

  return (
    <>
      <Form addEntryHandler={addEntryHandler} />
      <Entries entries={entries} />
    </>
  );
}

export default App;
