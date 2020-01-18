import React, { Component } from 'react';

import './person-details.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../Spinner';

export default class PersonDetails extends Component {
    swapiService = new SwapiService();
    state = {
        person: null,
        isLoading: true
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    updatePerson() {
        const { personId } = this.props;

        if (!personId) {
            return;
        }

        this.setState(() => {
            return {
                isLoading: true,
                person: null
            };
        });

        this.swapiService.getPerson(personId).then(person => {
            this.setState({ person, isLoading: false });
        });
    }

    render() {
        const personView = this.state.person ? (
            <PersonDetailsView person={this.state.person} />
        ) : null;

        const spinner = this.state.isLoading ? <Spinner /> : null;

        return (
            <div className='person-details card mb-2'>
                {spinner}
                {personView}
            </div>
        );
    }
}

const PersonDetailsView = props => {
    const { id, name, gender, birthYear, eyeColor } = props.person;
    return (
        <React.Fragment>
            <img
                className='person-image'
                src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                alt={name}
            />

            <div className='card-body'>
                <h4>
                    {name} {id}
                </h4>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <span className='term'>Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='term'>Birth Year</span>
                        <span>{birthYear}</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='term'>Eye Color</span>
                        <span>{eyeColor}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
};
