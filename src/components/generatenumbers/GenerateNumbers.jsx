import React, { useState } from 'react';
import './generateNumbers.css';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export const GenerateNumbers = () => {
  const [inputValue, setInputValue] = useState('');
  const [numbersOnly, setNumbersOnly] = useState([]);
  const [error, setError] = useState('');

  const handleInput = (e) => {
    e.preventDefault();

    if (/^[0-9\s]+$/.test(inputValue)) {
      setError('Please enter letters');
      return;
    }

    const letterToNumber = mapLettersToNumber(inputValue);
    const numbersOnly = letterToNumber.map((item) => item.number);
    setNumbersOnly(numbersOnly);
    setInputValue('');
    setError('');
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setError('');
  };

  const mapLettersToNumber = (text) => {
    const letters = text.toUpperCase().split('');
    const mapping = {
      A: 2,
      B: 22,
      C: 222,
      D: 3,
      E: 33,
      F: 333,
      G: 4,
      H: 44,
      I: 444,
      J: 5,
      K: 55,
      L: 555,
      M: 6,
      N: 66,
      O: 666,
      P: 7,
      Q: 77,
      R: 777,
      S: 7777,
      T: 8,
      U: 88,
      V: 888,
      W: 9,
      X: 99,
      Y: 999,
      Z: 9999,
      ' ': 0,
    };

    const letterToNumberMapping = [];
    letters.forEach((letter) => {
      if (mapping.hasOwnProperty(letter)) {
        letterToNumberMapping.push({ letter, number: mapping[letter] });
      }
    });

    return letterToNumberMapping;
  };

  const handleDelete = () => {
    setInputValue('');
    setNumbersOnly([]);
    setError('');
  };

  return (
    <>
      <div className="input-container">
        <label>generate code</label>
        <form onSubmit={handleInput}>
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Type..."
          />
          <button type="submit">generate</button>
        </form>
        {error && <div className="error-message">{error}</div>}
      </div>
      <div className="clear" onClick={handleDelete}>
        <AiFillDelete size={30} color="#FFF" />
      </div>
      <Link to={'/letters'} className="link-div">
        generate letters
      </Link>
      <div className="output-container">
        <label className="output-label">Numbers:</label>
        <div className="numbers-display">{numbersOnly.join(' ')}</div>
      </div>
    </>
  );
};
