import React from 'react';
import {Route, Switch} from 'react-router-dom';
import CharacterList from './components/CharacterList';
import EpisodeList from './components/EpisodeList';
import Character from './components/Character';


export default (
  <Switch>
    <Route component={CharacterList} exact path='/'/>
    <Route component={EpisodeList} path='/episodes'/>
    <Route component={Character} path='/character/:id'/>
  </Switch>
)