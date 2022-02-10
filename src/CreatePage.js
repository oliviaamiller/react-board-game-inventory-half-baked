import { useState } from 'react';
import { createGame } from './services/fetch-utils';
import { useHistory } from 'react-router-dom';
import GameForm from './GameForm';
import './App.css';


export default function CreatePage() {
  // you'll need the history hook from react-router-dom to do your redirecting in the handleSubmit

  // here's the state you'll need:
    // title;
    // genre;
    // designer;
    // description;
    // minPlayers;
    // maxPlayers;

  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [designer, setDesigner] = useState('');
  const [description, setDescription] = useState('');
  const [minPlayers, setMinPlayers] = useState('');
  const [maxPlayers, setMaxPlayers] = useState('');
  const history = useHistory();


  async function handleSubmit(e) {
    e.preventDefault();

    // create a game
    await createGame({
      title: title,
      genre: genre,
      designer: designer, 
      description: description,
      min_players: minPlayers,
      max_players: maxPlayers
    });

    // use history.push to send the user to the list page
    history.push('/board-games');

  }

  return (
    <div>
      {/* on submit, call your handleSubmit function */}
      <GameForm 
        submitGame={handleSubmit}
        title={title}
        setTitle={setTitle}
        genre={genre}
        setGenre={setGenre}
        designer={designer}
        setDesigner={setDesigner}
        description={description}
        setDescription={setDescription}
        minPlayers={minPlayers}
        setMinPlayers={setMinPlayers}
        maxPlayers={maxPlayers}
        setMaxPlayers={setMaxPlayers}/>
    </div>
  );
}
