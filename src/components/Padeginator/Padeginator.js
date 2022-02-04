import React, { useState } from 'react';

import styles from './Padeginator.module.css';

import { padeginatorFunc } from '../../helpers/padeginatorFunc';

const Padeginator = (props) => {
  const [inputedWord, setInputedWord] = useState('');
  const [targetWord, setTargetWord] = useState('');
  const [inputedCase, setInputedCase] = useState('imen');

  console.log(inputedCase);

  const inputWordHandler = (event) => {
    setInputedWord(event.target.value);
  };

  const getWordHandler = (event) => {
    event.preventDefault();
    setTargetWord(padeginatorFunc(inputedWord, inputedCase));
  };
  const inputCaseHandler = (event) => {
    setInputedCase(event.target.value);
  };

  return (
    <main className={styles.padeginator}>
      <form onSubmit={getWordHandler} className={styles.control} action=''>
        <input onChange={inputWordHandler} value={inputedWord} type='text' />
        <div className={styles.actions}>
          <select onChange={inputCaseHandler} name='caseVal' id=''>
            <option value='imen'>Именительный</option>
            <option value='rod'>Родительный</option>
            <option value='dat'>Дательный</option>
            <option value='vin'>Винительный</option>
            <option value='tvor'>Творительный</option>
            <option value='predl'>Предложный</option>
          </select>
          <button className={styles.action}>Просклонять слово</button>
        </div>
      </form>
      <h1>{targetWord}</h1>
    </main>
  );
};

export default Padeginator;
