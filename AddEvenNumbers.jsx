import React,{useState} from "react";
import SumEvenNumbers from './SumEvenNumbers'

import { jsxDEV } from "react/jsx-dev-runtime";

function AddEvenNumbers (){

    const SumEvenNumbers = () => {
  const [number, setNumber] = useState('');
  const [sum, setSum] = useState(null);

  const calculateSum = () => {
    const num = parseInt(number, 10);
    if (isNaN(num) || num < 0) {
      setSum('Please enter a valid positive number.');
      return;
    }

    let total = 0;
    for (let i = 2; i <= num; i += 2) {
      total += i;
    }

    setSum(total);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Sum of Even Numbers Calculator</h2>
      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        style={{ padding: '5px', marginRight: '10px' }}
      />
      <button onClick={calculateSum} style={{ padding: '5px 10px' }}>
        Calculate
      </button>
      {sum !== null && (
        <div style={{ marginTop: '20px', fontSize: '18px' }}>
          Result: {sum}
        </div>
      )}
    </div>
  );
};




}

export default AddEvenNumbers;