import React, { useState } from 'react';
import Modal from './Modal';

const Form = (props) => {
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');
  const [modalVisibility, setModalVisibility] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const userNameInputChangeHandler = (e) => {
    setUserName(e.target.value);
  };

  const ageInputChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (userName.trim().length === 0 || age.trim().length === 0) {
      setModalVisibility(true);
      setErrorMessage('Please enter a valid name and age (non-empty values).');
      return;
    }
    if (isNaN(age) || age < 0) {
      setModalVisibility(true);
      setErrorMessage('Please enter a valid number greater than zero.');
      return;
    }

    const entry = `${userName} (${age} years old)`;
    props.addEntryHandler(entry);
    setUserName('');
    setAge('');
  };

  const hideModal = () => {
    setModalVisibility(false);
  };

  return (
    <>
      <form onSubmit={formSubmitHandler} className="w-1/2 mx-auto mt-12">
        <div className="flex flex-col gap-2 p-4 bg-white rounded-2xl">
          <label className="text-2xl">Username</label>
          <input type="text" value={userName} onChange={userNameInputChangeHandler} className="border p-2 rounded-md" />
          <label className="text-2xl">Age (Years)</label>
          <input type="text" value={age} onChange={ageInputChangeHandler} className="border p-2 rounded-md" />
          <button type="submit" className="mr-auto mt-2 py-2 px-6 bg-purple-500 text-white rounded-md w-full md:w-auto">
            Add User
          </button>
        </div>
      </form>
      <Modal modalVisibility={modalVisibility} errorMessage={errorMessage} hideModal={hideModal} />
    </>
  );
};

export default Form;
