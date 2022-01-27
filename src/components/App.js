import '../styles/App.scss';
import { useState } from 'react';
const App = () => {
  const [error, setError] = useState(0);
  //Estado palabra a adivinar
  const [word, setWord] = useState('katacroker');
  //Estado letras que introduce la jugadora
  const [userLetters, setUserLetters] = useState([]);
  //Estado la última letra introducida por la jugadora
  const [lastLetter, setlastLetter] = useState('');

  const handleLastLetter = (ev) => {
    const inputValue = ev.currentTarget.value;
    if (/^[a-zA-ZáäéëíïóöúüÁÄÉËÍÏÓÖÚÜñÑ]?$/.test(inputValue)) {
      setlastLetter(ev.currentTarget.value);
      if (lastLetter !== '') {
        setUserLetters([...userLetters, lastLetter]);
      }
    }
  };
  const handleCounter = (ev) => {
    ev.preventDefault();
    if (error <= 13) {
      setError(error + 1);
      console.log(error);
    } else if (error > 13) {
      setError(0);
    }
  };
  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
    return wordLetters.map((letter, index) => {
      if (letter === lastLetter) {
        return (
          <li key={index} className='letter'>
            {lastLetter}
          </li>
        );
      } else {
        return <li key={index} className='letter'></li>;
      }
    });
  };

  return (
    <div>
      <div className='page'>
        <header>
          <h1 className='header__title'>Juego del ahorcado</h1>
        </header>
        <main className='main'>
          <section>
            <div className='solution'>
              <h2 className='title'>Solución:</h2>
              <ul className='letters'>{renderSolutionLetters()}</ul>
            </div>
            <div className='error'>
              <h2 className='title'>Letras falladas:</h2>
              <ul className='letters'>
                <li className='letter'>f</li>
                <li className='letter'>q</li>
                <li className='letter'>h</li>
                <li className='letter'>p</li>
                <li className='letter'>x</li>
              </ul>
            </div>
            <form className='form'>
              <label className='title' htmlFor='last-letter'>
                Escribe una letra:
              </label>
              <input
                autoComplete='off'
                className='form__input'
                maxLength='1'
                type='text'
                name='last-letter'
                id='last-letter'
                value={lastLetter}
                onChange={handleLastLetter}
              />
            </form>
            <button onClick={handleCounter}>Errores</button>
          </section>
          <section className={`dummy error-${error}`}>
            <span className='error-13 eye'></span>
            <span className='error-12 eye'></span>
            <span className='error-11 line'></span>
            <span className='error-10 line'></span>
            <span className='error-9 line'></span>
            <span className='error-8 line'></span>
            <span className='error-7 line'></span>
            <span className='error-6 head'></span>
            <span className='error-5 line'></span>
            <span className='error-4 line'></span>
            <span className='error-3 line'></span>
            <span className='error-2 line'></span>
            <span className='error-1 line'></span>
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
