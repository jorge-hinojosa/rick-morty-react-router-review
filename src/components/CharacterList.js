import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';

export default class CharacterList extends Component {
  constructor() {
    super()
    this.state = {
      characters: []
    }
  }
  componentDidMount() {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
          this.setState({characters: res.data.results})
        })
      .catch(err => console.log(err))
  }
  render() {
    const {characters} = this.state
    return (
      <div className='chars-container'>
        {
          characters.length === 0 
          ? <h2>Loading...</h2>
          : characters.map(character => {
            return (
              <Link to={`/character/${character.id}`} className='char-link'>
                <div className='char-card' key={character.id}>
                  <img className='char-img'src={character.image} alt={character.name} />
                  <h5>{character.name}</h5>
                </div>
              </Link>
            )
          })
        }
      </div>
    )
  }
}
