import React, { Component } from 'react';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
import ErrorBoundary from '../ErrorBoundary';
import './people-page.css';

import Row from '../Row';

export default class PeoplePage extends Component {
    state = {
        selectedPerson: 1
    };

    onPersonSelected = id => {
        this.setState({
            selectedPerson: id
        });
    };

    render() {
        const itemList = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.props.getData}
                renderItem={this.props.renderItem}
            />
        );
        const itemData = <PersonDetails personId={this.state.selectedPerson} />;

        return (
            <ErrorBoundary>
                <Row left={itemList} right={itemData} />
            </ErrorBoundary>
        );
    }
}
