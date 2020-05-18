import React, { Component } from 'react';
import './app.css';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import PeoplePage from '../PeoplePage';
import ErrorBoundary from '../ErrorBoundary';
import { SwapiServiceProvider } from '../SwapiServiceContext';
import SwapiService from '../../services/swapi-service';
import Row from '../Row';

import {
    PersonList,
    PlanetList,
    StarshipList,
    PersonDetail,
    PlanetDetail,
    StarshipDetail
} from '../SwComponents';

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
        return (
            <div className='stardb-app'>
                {/* Оборачиваем в компонент, который будет отлавливать ошибки и генерировать компонент ошибки */}
                <ErrorBoundary>
                    {/* Оборачиваем все тело приложения в провайдер, который предоставит любому нижележащему компоненту возможность использовать swapiService */}
                    <SwapiServiceProvider value={this.swapiService}>
                        <Header />
                        {/* <Row  left={} right={} /> */}
                        {this.state.showRandomPlanet ? <RandomPlanet /> : null}
                        <button
                            className='toggle-planet btn btn-warning btn-lg'
                            onClick={this.toggleRandomPlanet}
                        >
                            Toggle Random Planet
                        </button>
                        <PersonDetail itemId={11} />
                        <PlanetDetail itemId={11} />
                        <StarshipDetail itemId={11} />

                        <PersonList />
                        <PlanetList />
                        <StarshipList />
                    </SwapiServiceProvider>
                </ErrorBoundary>
            </div>
        );
    }
}
