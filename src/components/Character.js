import React, { Component } from 'react'
import axios from 'axios'

export default class Character extends Component {
  constructor() {
    super() 
    this.state = {
      currChar: []
    }
  }
  componentDidMount() {
    const {id} = this.props.match.params
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => this.setState({currChar: res.data}))
      .catch(err => console.log(err))
  }
  render() {
    const {currChar} = this.state;
    console.log(currChar);
    return (
      <div className='curr-char-cont'>
        {
          currChar.length === 0 
          ? <h1>Loading...</h1>
          : <>
              <h1>{currChar.name}</h1>
              <img src={currChar.image} alt={currChar.name} className='curr-char-img'/>
              <h3>Species: {currChar.species}</h3>
              <h3>Gender: {currChar.gender}</h3>
              <h3>Origin: {currChar.origin.name}</h3>
              <h3>Location: {currChar.location.name}</h3>
              <h3>Status: {currChar.status}</h3>
            </>
        }
        
      </div>
    )
  }
}
