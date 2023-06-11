import React, { useState } from 'react';
import './generateLetters.css';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export const GenerateLetters = () => {
  const [inputValue, setInputValue] = useState('');
  const [lettersGenerated, setLettersGenerated] = useState('');
  const [error, setError] = useState('');

  const handleInput = (e) => {
    e.preventDefault();

    if (!/^[0-9\s]+$/.test(inputValue)) {
      setError('Please enter numbers');
      return;
    }

    const numberToLetter = mapNumbersToLetters(inputValue);
    const lettersGenerated = numberToLetter.join('');
    setLettersGenerated(lettersGenerated);
    setInputValue('');
    setError('');
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setError('');
  };

  const mapNumbersToLetters = (numbers) => {
    const mapping = {
      2: 'A',
      22: 'B',
      222: 'C',
      3: 'D',
      33: 'E',
      333: 'F',
      4: 'G',
      44: 'H',
      444: 'I',
      5: 'J',
      55: 'K',
      555: 'L',
      6: 'M',
      66: 'N',
      666: 'O',
      7: 'P',
      77: 'Q',
      777: 'R',
      7777: 'S',
      8: 'T',
      88: 'U',
      888: 'V',
      9: 'W',
      99: 'X',
      999: 'Y',
      9999: 'Z',
      0: ' ',
    };

    const numbersArray = numbers.split(' ');
    const letterArray = numbersArray.map((number) => mapping[number]);
    return letterArray;
  };

  const handleDelete = () => {
    setInputValue('');
    setLettersGenerated('');
    setError('');
  };

  return (
    <>
      <div className="input-container">
        <label>generate letters</label>
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
      <div className="clear-letters" onClick={handleDelete}>
        <AiFillDelete size={30} color="#fff" />
      </div>
      <Link to="/" className="link-div">
        generate numbers
      </Link>
      <div className="output-container">
        <label className="output-label">letters:</label>
        <div className="letters-display">{lettersGenerated}</div>
      </div>
    </>
  );
};
