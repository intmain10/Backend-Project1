import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // Empty dependency array to run the effect only once

  return (
    <>
      <h1>Hello Duniya</h1>
      <p>Jokes: {jokes.length}</p>

      {
        // eslint-disable-next-line no-unused-vars
        Array.isArray(jokes) &&jokes.map((joke, index) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <h3>{joke.index}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  );
}

export default App;
