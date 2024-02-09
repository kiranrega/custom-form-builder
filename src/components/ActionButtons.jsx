import React, { useState } from 'react';

function ActionButtons({ addInput, addSelect }) {
  const [label, setLabel] = useState('');
  const [options, setOptions] = useState('');
  const [error, setError] = useState(''); // Initialize error state

  const handleAddInput = () => {
    if (label.trim() === '') {
      setError('Label cannot be empty');
    } else {
      setError('');
      addInput(label);
      setLabel(''); // Reset the label state
    }
  };

  const handleAddSelect = () => {
    if (label.trim() === '' || options.trim() === '') {
      setError('Label and options cannot be empty');
    } else {
      setError('');
      addSelect(label, options.split(','));
      setLabel(''); // Reset the label state
      setOptions(''); // Reset the options state
    }
  };

  return (
    <div className='form-container'>
      <div>
      <input value={label} onChange={(e) => setLabel(e.target.value)} placeholder="Label" className='form-input'/>
      <button onClick={handleAddInput} className='form-button'>Add Input Box</button>  
      </div>
      <div>
      <input value={options} onChange={(e) => setOptions(e.target.value)} placeholder="Options (comma separated)" className='form-input'/>
      <button onClick={handleAddSelect} className='form-button'>Add Select Box</button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
    </div>
  );
}

export default ActionButtons;
