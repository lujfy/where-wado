import { useState } from 'react';
import Game from './components/Game';
import './App.css';
import Leaderboard from './components/LeaderBoard';

  // connect to database to get ranking record
  // loading page & start button before timer starts

export default function App() {

  const [isBeforeStart, setIsBeforeStart] = useState(true);

  function start() {
    setIsBeforeStart(false);
  }

  function toStartPage() {
    setIsBeforeStart(true);
  }

  return (
    <div className="App">
      <header>
        Where's Doggo?
      </header>
      { isBeforeStart ? <Leaderboard start={start} /> : <Game toStartPage={toStartPage} /> }
      <footer>
        I copy from tsoibet
      </footer>
    </div>
  );
};
