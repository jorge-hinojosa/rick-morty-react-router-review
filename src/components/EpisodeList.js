import React, { Component } from 'react'
import axios from 'axios'

export default class EpisodeList extends Component {
  constructor() {
    super()
    this.state = {
      episodes: []
    }
  }
  componentDidMount() {
    axios.get('https://rickandmortyapi.com/api/episode/')
      .then(res => {
          this.setState({episodes: res.data.results})
        })
      .catch(err => console.log(err))
  }
  render() {
    const {episodes} = this.state
    return (
      <div className='episode-container'>
        <h1>Episode List</h1>
        {
          episodes.length === 0 
          ? <h2>Loading...</h2>
          : episodes.map(episode => {
            return (
              <div className='episode-card' key={episode.id}>
                <h5>{episode.name}</h5>
                <p>{episode.episode}</p>
                <p>{episode.air_date}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}
