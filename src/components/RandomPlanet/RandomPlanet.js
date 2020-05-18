import React, { Component } from 'react';
import './random-planet.css';

import SwapiService from '../../services/swapi-service';
import Spinner from '../Spinner';
import defaultPlanet from './default-planet.jpg';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

export default class RandomPlanet extends Component {
    swapiService = new SwapiService();
    state = {
        planet: {},
        img: null,
        loading: true,
        error: false
    };
    // Метод жизненного цикла, который происходит сразу после завершения стадии рендеринга (здесь можно выполнять сетевые запросы и все side effects)
    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 10000);
    }

    // Метод жизненного цикла, который происходит перед удалением компонента (здесь надо убирать все ненужное, что могло остаться от компонента - setInterval, например)
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onPlanetLoaded = planet => {
        this.setState({ planet, loading: false });
    };

    onImageLoaded = img => {
        this.setState({ img });
    };

    onError = () => {
        this.setState({
            error: true,
            loading: false
        });
    };

    // Обновляем планету
    updatePlanet = () => {
        const id = Math.floor(Math.random() * 25 + 3);
        //const id = 12000;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
        this.swapiService.getImage(id, 'planets').then(this.onImageLoaded);
    };

    render() {
        const { planet, loading, error, img } = this.state;
        const hasData = !(loading || error);
        const errorMsg = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const imgSource = img ? URL.createObjectURL(img) : defaultPlanet;
        const content = hasData ? (
            <PlanetView planet={planet} img={imgSource} />
        ) : null;

        return (
            <div className='random-planet jumbotron rounded'>
                {errorMsg}
                {spinner}
                {content}
            </div>
        );
    }
}

const PlanetView = ({ planet, img }) => {
    const { name, population, rotationPeriod, diameter } = planet;

    return (
        // ReactFragment удобно использовать, когда из компонента нужно вернуть несколько блоков, а оборачивать их в один нецелесообразно
        <React.Fragment>
            <img className='planet-image' src={img} alt={name} />
            <div>
                <h4>{name}</h4>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <span className='term'>Population</span>
                        <span>{population}</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='term'>Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='term'>Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
};
