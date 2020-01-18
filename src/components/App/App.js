import React, { Component } from 'react';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import PeoplePage from '../PeoplePage';
import ItemList from '../ItemList';
import SwapiService from '../../services/swapi-service';

import './app.css';

export default class App extends Component {
    state = {
        showRandomPlanet: true
    };

    swapiService = new SwapiService();

    toggleRandomPlanet = () => {
        this.setState(state => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            };
        });
    };

    render() {
        const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

        return (
            <div className='stardb-app'>
                <Header />
                {planet}

                <button
                    className='toggle-planet btn btn-warning btn-lg'
                    onClick={this.toggleRandomPlanet}
                >
                    Toggle Random Planet
                </button>
                <PeoplePage
                    getData={this.swapiService.getAllPeople}
                    renderItem={({ name, gender, birthYear }) =>
                        `${name} (${gender}, ${birthYear})`
                    }
                />
                <div className='row mb-2'>
                    <div className='col-md-6'>
                        <ItemList
                            onItemSelected={this.onPersonSelected}
                            getData={this.swapiService.getAllPlanets}
                            renderItem={item => item.name}
                        />
                    </div>
                </div>
                <div className='row mb-2'>
                    <div className='col-md-6'>
                        <ItemList
                            onItemSelected={this.onPersonSelected}
                            getData={this.swapiService.getAllStarShips}
                            renderItem={item => item.name}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
