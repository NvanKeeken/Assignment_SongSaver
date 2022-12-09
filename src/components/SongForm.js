import SubmitButton from "./SubmitButton";

// Form to add song to playlist

function SongForm(props) {
    
// Value of input and select element is passed to this variable, and the newSong is passed to state when submit button is clicked
  const newSong = {
    title: "",
    artist: "",
    genre: "",
    rating: "",
    id: props.songs.length + 1,
  };
  return (
    <form className="song-form" onSubmit={(e) => props.submit(e, newSong)}>
      <input
        type="text"
        placeholder="title"
        name="title"
        onBlur={(e) => {
          newSong.title = e.target.value;
        }}
      ></input>
      <input
        type="text"
        placeholder="artist"
        name="artist"
        onBlur={(e) => (newSong.artist = e.target.value)}
      ></input>

      <select
        type="text"
        placeholder="genre"
        name="genre"
        onBlur={(e) => (newSong.genre = e.target.value)}
      >
        <option value="pop">Pop</option>
        <option value="rock">Rock</option>
        <option value="classical">Classical</option>
        <option value="country">Country</option>
        <option value="hip-hop">Hip-hop</option>
        <option value="r&b">R&B</option>
        <option value="jazz">Jazz</option>
        <option value="electronic">Electronic</option>
        <option value="folk">Folk</option>
      </select>

      <select name="rating" onBlur={(e) => (newSong.rating = e.target.value)}>
        <option value="1">1 star</option>
        <option value="2">2 stars</option>
        <option value="3">3 stars</option>
        <option value="4">4 stars</option>
        <option value="5">5 stars</option>
      </select>
      <SubmitButton />
    </form>
  );
}

export default SongForm;
