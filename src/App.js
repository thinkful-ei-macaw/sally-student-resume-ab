import React from 'react';
import mavise from './img/Mavise.jpg';

function App() {
  return (
    <main className='App'>
      <header className='App-header'>
        <h1>Sally Student's Resume</h1>
      </header>
      <img src={mavise} alt='totally not sally' />
      <h2>Education:</h2>
        <ul>
          <li>M.S, Chemical Engineering, University of Somewhere, 2015 – 2018</li><br />
          <li>B.Eng, Chemical Engineering, University of Somewhere, 2011 - 2015</li>
        </ul>
      <h2>Employment History:</h2>
        <ul>
          <li>Kumon Learning Center, Science Tutor, 2015 - Present</li>
              <p>lorem ipsum</p><br />
          <li>Starbucks, Barista, 2010 - 2015</li>
              <p>lorem ipsum</p>
        </ul>
    </main>
  );
}

export default App;