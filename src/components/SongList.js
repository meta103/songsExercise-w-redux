import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="ui divided list">
        {this.renderList()}
      </div>
    )
  }
}

//by convention se suele llamar asi:
const mapStateToProps = (state) => {
  return { songs: state.songs }
}

//Lo que pongamos como parametro en connect, se pasa como prop al componenteque lo use!!!!
export default connect(mapStateToProps, { selectSong })(SongList)
