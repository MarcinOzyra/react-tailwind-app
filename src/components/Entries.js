import React from 'react';
import Entry from './Entry';

const Entries = (props) => {
  if (props.entries.length === 0) return;
  return (
    <div className="flex flex-col mt-8 gap-2 p-4 bg-white rounded-2xl w-1/2 mx-auto">
      {props.entries.map((entry) => (
        <Entry entry={entry.entry} key={entry.id} />
      ))}
    </div>
  );
};

export default Entries;
