import React, { useState } from 'react';

function App() {
  const [entries, setEntries] = useState([]);
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');

  const userNameInputChangeHandler = (e) => {
    setUserName(e.target.value);
  };

  const ageInputChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setEntries(...entries, { id: Math.random().toString(), entry: `${userName} (${age} years old)` });
    setUserName('');
    setAge('');
  };

  // console.log(entries);

  return (
    <>
      <form onSubmit={formSubmitHandler} className="w-1/2 mx-auto mt-12">
        <div className="flex flex-col gap-2 p-4 bg-white rounded-2xl">
          <label className="text-2xl">Username</label>
          <input type="text" value={userName} onChange={userNameInputChangeHandler} className="border p-2 rounded-md" />
          <label className="text-2xl">Age (Years)</label>
          <input type="text" value={age} onChange={ageInputChangeHandler} className="border p-2 rounded-md" />
          <button type="submit" className="mr-auto mt-2 py-2 px-6 bg-purple-500 text-white rounded-md">
            Add User
          </button>
        </div>
      </form>
      <div className="flex flex-col mt-8 gap-2 p-4 bg-white rounded-2xl w-1/2 mx-auto">
        <div className="border p-2 rounded-md">tetst</div>
        <div className="border p-2 rounded-md">tetst</div>
      </div>
    </>
  );
}

export default App;
