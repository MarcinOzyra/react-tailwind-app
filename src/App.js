import React, { useState } from 'react';
import Entries from './components/Entries';
import Form from './components/Form';

function App() {
  const [entries, setEntries] = useState([]);

  const addEntryHandler = (entry) => {
    setEntries((prevEntries) => {
      return [...prevEntries, { id: Math.random().toString(), entry: entry }];
    });
  };

  return (
    <>
      <Form addEntryHandler={addEntryHandler} />
      {entries.length > 0 && <Entries entries={entries} />}
    </>
  );
}

export default App;
