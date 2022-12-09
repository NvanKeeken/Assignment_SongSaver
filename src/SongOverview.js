import React, {Component} from "react"
import SongForm from "./components/SongForm"
import SongList  from "./components/SongList"
import SortSection from "./components/SortSection"
import SortRating from "./components/SortRating"

class SongOverview extends Component {
  constructor() {
    super()
    this.state = 
    {
      songs: [
        {
          title: "Video Games",
          artist: "Lana del Rey",
          genre: "Pop",
          rating: "3",
          id: 1
        },
        {
          title: "Hurt",
          artist: "Johnny Cash",
          genre: "Pop",
          rating: "4",
          id: 2
        },
        {
          title: "Feeling Good",
          artist: "Nina Simone",
          genre: "Jazz",
          rating: "4",
          id: 3
        }
      ]
    }
   this.addSong = this.addSong.bind(this);
   this.handleSubmit= this.handleSubmit.bind(this)
   this.removeSong= this.removeSong.bind(this)
   this.sortSongTitle= this.sortSongTitle.bind(this)
   this.sortSongRating= this.sortSongRating.bind(this)
  }

 addSong = (song) => {
 this.setState({songs:[...this.state.songs,song]})
    // do something to change the state
}

handleSubmit(e, song){
e.preventDefault()
this.addSong(song)
e.target.reset()
}

removeSong (id){
  console.log(id)
 this.setState({songs: this.state.songs.filter((song)=> { console.log(song); return song.id !== id})} )
}

sortSongTitle (e){
  
  const songAscending = [...this.state.songs].sort((a,b) =>a.title > b.title ? 1 : -1)
  console.log(songAscending)
  
  const songDescending = [...this.state.songs].sort((a,b)=> a.title > b.title ? -1 : 1)
  e.target.value=== "a-z" ? this.setState({songs: songAscending}) : this.setState({songs:songDescending})

}

sortSongRating (e){
  const ratingAscending = [...this.state.songs].sort((a,b) =>a.rating-b.rating)
  const ratingDescending = [...this.state.songs].sort((a,b)=> b.rating - a.rating)
  e.target.value=== "1-5" ? this.setState({songs: ratingAscending}) : this.setState({songs:ratingDescending})

}

  render(){
    return(
     
      <div>
      <SongForm addSong={this.addSong} submit={this.handleSubmit} songs={this.state.songs}/>
      <SortSection sortTitle= {this.sortSongTitle} sortRating={this.sortSongRating}/>
      <SortRating sortRating={this.sortSongRating}/>
      <table style={{width: "100%"}}>
        <thead>
                        <tr className="song-header">  
                                <th className="song-row__item">Song</th>
                                <th className="song-row__item">Artist</th>
                                <th className="song-row__item">Genre</th>
                                <th className="song-row__item">Rating</th>
                              </tr>
          </thead>
          <SongList songs={this.state.songs} removeSong={this.removeSong} />
        </table>  
             {console.log(this.state.songs)}                   
      </div>
      
    )
  }
}

export default SongOverview 