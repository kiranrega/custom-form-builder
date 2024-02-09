import React from 'react';

function Display({ data }) {
  return (
    <div className="display" >
      {data?.map((item, index) => (
        <div className="card" key={index} >
          {Object.keys(item).map((key) => {
            const displayKey = key.split('-').slice(1).join('-');
            return (
              <p key={key} >
                <strong>{displayKey}:</strong> {item[key]}
              </p>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Display;
