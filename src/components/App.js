import '../styles/App.scss';
import { useState, useEffect } from 'react';
import callToApi from '../services/api.js';
import Header from './Header';
import Dummy from './Dummy';
import ErrorLetters from './ErrorLetters';
import SolutionLetters from './SolutionLetters';
import Form from './Form';

const App = () => {
  //Estado palabra a adivinar
  const [word, setWord] = useState('');
  //Estado letras que introduce la jugadora
  const [userLetters, setUserLetters] = useState([]);
  //Estado la última letra introducida por la jugadora
  const [lastLetter, setlastLetter] = useState('');
  //Para pintar el hangman
  //Estado letras buenas
  const [goodLetters, setGoodLetters] = useState([]);
  //Estado letras fallidas
  const [wrongLetters, setWrongLetters] = useState([]);

  useEffect(() => {
    callToApi().then((response) => {
      console.log(response);
      setWord(response);
    });
  }, []);

  const handleLastLetter = (ev) => {
    ev.preventDefault();
    const inputValue = ev.currentTarget.value;
    if (inputValue.match('^[a-zA-ZáäéëíïóöúüÁÄÉËÍÏÓÖÚÜñÑ]?$')) {
      setlastLetter(inputValue);
      if (inputValue !== '') {
        setUserLetters([...userLetters, inputValue]);
        if (word.includes(inputValue)) {
          //Al array de letras buenas
          setGoodLetters([...goodLetters, inputValue]);
        } else {
          //Al array de letras fallidas
          setWrongLetters([...wrongLetters, inputValue]);
        }
      }
    }
  };

  return (
    <div>
      <div className='page'>
        <Header title='Juego del ahorcado' />
        <main className='main'>
          <section>
            <SolutionLetters word={word} goodLetters={goodLetters} />
            <ErrorLetters wrongLetters={wrongLetters} />
            <Form handleLastLetter={handleLastLetter} />
          </section>
          <Dummy length={wrongLetters.length} />
        </main>
      </div>
    </div>
  );
};

export default App;
