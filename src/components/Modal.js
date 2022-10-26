import React from 'react';

const Modal = (props) => {
  return (
    <div
      onClick={props.hideModal}
      className={`${
        !props.modalVisibility && 'hidden'
      } absolute flex justify-center items-center inset-0 overflow-y-auto z-10 bg-gray-600 bg-opacity-50`}
    >
      <div className="bg-white w-1/3 rounded-md shadow-md overflow-hidden">
        <div className="bg-purple-400 text-white p-2 font-medium">Invalid input</div>
        <div className="p-2 mt-2">{props.errorMessage}</div>
        <button type="button" onClick={props.hideModal} className="p-2 m-2 rounded-md bg-purple-500 text-white">
          Okay
        </button>
      </div>
    </div>
  );
};

export default Modal;
