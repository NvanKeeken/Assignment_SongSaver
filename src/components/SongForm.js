import SubmitButton from "./SubmitButton"

function SongForm (props){
    const newSong = {
        title:"",
        artist:"",
        genre:"",
        rating: "",
        id: props.songs.length + 1
    }
    return(
        <form onSubmit={(e)=>props.submit(e, newSong)}>
            <input type="text" placeholder="title" name="title" onBlur={(e)=>{ newSong.title = e.target.value}}></input>

            <input type="text" placeholder="artist" name="artist" onBlur={(e)=>newSong.artist = e.target.value}></input>

            <select type="text" placeholder="genre" name="genre"onBlur={(e)=>newSong.genre = e.target.value}>
                <option value="pop">Pop</option>
                <option value="rock">Rock</option>
                <option value="jazz">jazz</option>
            </select>

            <select  name="rating" onBlur={(e)=>newSong.rating= e.target.value}> 
               <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                
            </select>
            <SubmitButton/>
        </form>
    )

}

export default SongForm 