import React, {Component} from "react"
import SongForm from "./components/SongForm"
import SongList  from "./components/SongList"

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
        }
      ]
    }
   this.addSong = this.addSong.bind(this);
   this.handleSubmit= this.handleSubmit.bind(this)
  }

 addSong = (song) => {
 this.setState({songs:[...this.state.songs,song]})
 console.log(this.state.songs)
    // do something to change the state
}

handleSubmit(e, song){
e.preventDefault()
this.addSong(song)
e.target.reset()

}
  render(){
   
    return(
      <div>
      <SongForm addSong={this.addSong} submit={this.handleSubmit} songs={this.state.songs}/>
      <table style={{width: "100%"}}>
        <thead>
                        <tr className="song-header">  
                                <th className="song-row__item">Song</th>
                                <th className="song-row__item">Artist</th>
                                <th className="song-row__item">Genre</th>
                                <th className="song-row__item">Rating</th>
                              </tr>
          </thead>
          <SongList songs={this.state.songs} />
        </table>  
             {console.log(this.state.songs)}                   
      </div>
      
    )
  }
}

export default SongOverview 