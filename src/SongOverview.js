//imports
import React, { Component } from "react";
import SongForm from "./components/SongForm";
import SortSection from "./components/sort-components/SortTitle";
import SortRating from "./components/sort-components/SortRating";
import SongTable from "./components/SongTable";

// This container component handles the buisiness side of the application
class SongOverview extends Component {
  // Initial state
  constructor() {
    super();
    this.state = {
      songs: [
        {
          title: "Video Games",
          artist: "Lana del Rey",
          genre: "Pop",
          rating: "3",
          id: 1,
        },
        {
          title: "Hurt",
          artist: "Johnny Cash",
          genre: "Pop",
          rating: "4",
          id: 2,
        },
        {
          title: "Feeling Good",
          artist: "Nina Simone",
          genre: "Jazz",
          rating: "4",
          id: 3,
        },
      ],
    };
    this.addSong = this.addSong.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeSong = this.removeSong.bind(this);
    this.sortSongTitle = this.sortSongTitle.bind(this);
    this.sortSongRating = this.sortSongRating.bind(this);
  }

  // This functions check if the input fields are filled in and sets song, passed by handleSubmit function , to state
  addSong = (song) => {
    if (
      song.title === "" ||
      song.artist === "" ||
      song.genre === "" ||
      song.rating === ""
    ) {
      alert("Your song is incomplete");
    } else {
      this.setState({ songs: [...this.state.songs, song] });
    }
  };

  // This function is fired when "Add song" button is clicked, it passes the song to addSong function and empties the input fields aftwerwards
  handleSubmit = (e, song) => {
    e.preventDefault();
    this.addSong(song);
    e.target.reset();
  };

  // Additional functions

  // This function filters out the song with passed id when delete button is clicked (1 point)
  removeSong = (id) => {
    this.setState((preState) => ({
      songs: preState.songs
        .filter((song) => {
          return song.id !== id;
        })
        .map((song) => song),
    }));
  };

  // This function sorts the song titles a-z or z-a depending on the selected option (0.5 point)
  sortSongTitle = (e) => {
    const songAscending = [...this.state.songs].sort((a, b) =>
      a.title > b.title ? 1 : -1
    );
    const songDescending = [...this.state.songs].sort((a, b) =>
      a.title > b.title ? -1 : 1
    );
    e.target.value === "a-z"
      ? this.setState({ songs: songAscending })
      : this.setState({ songs: songDescending });
  };

  // This fuction sorts the song rating 1-5 or 5-1 depending on the selected option (0.5 point)
  sortSongRating = (e) => {
    const ratingAscending = [...this.state.songs].sort(
      (a, b) => a.rating - b.rating
    );
    const ratingDescending = [...this.state.songs].sort(
      (a, b) => b.rating - a.rating
    );
    e.target.value === "1-5"
      ? this.setState({ songs: ratingAscending })
      : this.setState({ songs: ratingDescending });
  };

  render() {
    return (
      <div className="songSaver-container">
        <SongForm
          addSong={this.addSong}
          submit={this.handleSubmit}
          songs={this.state.songs}
        />

        <div className="sort-container">
          <SortSection
            sortTitle={this.sortSongTitle}
            sortRating={this.sortSongRating}
          />
          <SortRating sortRating={this.sortSongRating} />
        </div>
        <SongTable songs={this.state.songs} removeSong={this.removeSong} />
      </div>
    );
  }
}

export default SongOverview;
