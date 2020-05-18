import React, { Component } from 'react';
import ItemList from '../ItemList';
import ItemDetails, { Record } from '../ItemDetails';
import ErrorBoundary from '../ErrorBoundary';
import SwapiService from '../../services/swapi-service';
import './people-page.css';

import Row from '../Row';

export default class PeoplePage extends Component {
    state = {
        selectedPerson: 1
    };

    swapiService = new SwapiService();

    onPersonSelected = id => {
        this.setState({
            selectedPerson: id
        });
    };

    render() {
        const {
            getPerson,
            getStarShip,
            getPersonImage,
            getStarShipImage
        } = this.swapiService;

        return (
            <ErrorBoundary>
                <Row
                    left={
                        <ItemList
                            onItemSelected={this.onPersonSelected}
                            getData={this.props.getData}
                            renderItem={this.props.renderItem}
                        />
                    }
                    right={
                        <ItemDetails
                            itemId={11}
                            getData={getPerson}
                            getImageUrl={getPersonImage}
                        >
                            <Record field='gender' label='Gender' />
                            <Record field='eyeColor' label='Eye color' />
                        </ItemDetails>
                    }
                />
            </ErrorBoundary>
        );
    }
}
