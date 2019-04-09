import React from 'react'
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (!song) {
    return <p>Select a song</p>
  }
  return (
    <div>
      <h3>Details</h3>
      <p>Title: {song.title} </p>
      <p>Duration: {song.duration}</p>
    </div>
  )
}

const mapStateToprops = (state) => {
  return { song: state.selectedSong }
}

export default connect(mapStateToprops)(SongDetail)

