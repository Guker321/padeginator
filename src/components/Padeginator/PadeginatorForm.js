import { useState } from 'react';
import { padeginatorFunc } from '../../helpers/padeginatorFunc';
import useInput from '../../hooks/use-input';

import styles from './PadeginatorForm.module.css';

const PadeginatorForm = () => {
  // const [inputedWord, setInputedWord] = useState('');
  const [targetWord, setTargetWord] = useState('');
  const [inputedCase, setInputedCase] = useState('imen');

  const {
    value: enteredWord,
    isValid: wordIsValid,
    hasError: wordHasError,
    valueChangeHandler: wordChangeHandler,
    inputBlurHandler: wordBlurHandler,
  } = useInput((value) => value.trim().length > 2 && !/[a-z]/gi.test(value));

  let formIsValid = false;

  if (wordIsValid) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }

  const getWordHandler = (event) => {
    event.preventDefault();
    setTargetWord(padeginatorFunc(enteredWord.toLowerCase(), inputedCase));
  };
  const inputCaseHandler = (event) => {
    setInputedCase(event.target.value);
  };

  const wordInputStyles = wordHasError
    ? `${styles.control} ${styles.invalid}`
    : `${styles.control}`;

  return (
    <>
      <form onSubmit={getWordHandler} action=''>
        <div className={`${wordInputStyles}`}>
          <input
            placeholder='Введите слово в ед. числе'
            onChange={wordChangeHandler}
            onBlur={wordBlurHandler}
            value={enteredWord}
            type='text'
          />
          {wordHasError && (
            <p className={styles.error_text}>
              Длина слова не менее 3 букв, только кириллица
            </p>
          )}
        </div>
        <div className={styles.actions}>
          <select onChange={inputCaseHandler} name='caseVal' id=''>
            <option value='imen'>Именительный падеж</option>
            <option value='rod'>Родительный падеж</option>
            <option value='dat'>Дательный падеж</option>
            <option value='vin'>Винительный падеж</option>
            <option value='tvor'>Творительный падеж</option>
            <option value='predl'>Предложный падеж</option>
          </select>
          <button disabled={!formIsValid} className={styles.action}>
            Просклонять слово
          </button>
        </div>
      </form>
      <p className={styles.result__block}>{targetWord}</p>
    </>
  );
};

export default PadeginatorForm;
