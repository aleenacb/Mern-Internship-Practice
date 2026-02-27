import React from 'react'
import Button from './Button'
import './Joke.css';
export default function JokeGenerator() {
    const [joke, setJoke] = React.useState("");
    const fetchApi = () => {
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single").then((res) => res.json()).then((data) => setJoke(data.joke));
    };
  return (
    <div className='joke'>
      <h1>Joke Generator</h1>
      <Button callApi={fetchApi}/>
      <p>{joke}</p>
    </div>
  );
}
