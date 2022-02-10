import './App.css';

export default function GameForm({ 
  submitGame,
  title,
  setTitle,
  genre,
  setGenre,
  designer,
  setDesigner,
  description,
  setDescription,
  minPlayers,
  setMinPlayers,
  maxPlayers,
  setMaxPlayers
}) {
  return (
    <div className='create'>
      <form onSubmit={submitGame}>
        <h2>Add board game</h2>
        <label>
            Title
          {/* on change, set the title in state */}
          <input required name='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
        </label>
        <label>
            Genre
          {/* on change, set the genre in state */}
          <select required value={genre} onChange={(e) => setGenre(e.target.value)} >
            <option>Tile-laying</option>
            <option>Economic</option>
            <option>War</option>
            <option>Card</option>
            <option>Abstract</option>
            <option>Cooperative</option>
            <option>Solo</option>
          </select>
        </label>
        <label>
            Designer
          {/* on change, set the designer in state */}
          <input required name='designer' value={designer} onChange={(e) => setDesigner(e.target.value)} />
        </label>
        <label>
            Min Players
          {/* on change, set the min players in state */}
          <input type='number' required name='min_players' value={minPlayers} onChange={(e) => setMinPlayers(e.target.value)} />
        </label>
        <label>
            Max Players
          {/* on change, set the max players in state */}
          <input type='number' required name='max_players' value={maxPlayers} onChange={(e) => setMaxPlayers(e.target.value)} />
        </label>
        <label>
            Description
          {/* on change, set the description in state */}
          <textarea required name='description' value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <button>Create game</button>
      </form>
    </div>
  );
}

// this will be a reusable form. It will replace the form in CreatePage and UpdatePage, since those two are basically the same, with very small differences. Looking at those differences you will be able to answer the question: What props does this GameForm need? //