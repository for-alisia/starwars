import React, { Component } from 'react';
import './item-details.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../Spinner';

const Record = ({ item, field, label }) => {
    return (
        <li className='list-group-item'>
            <span className='term'>{label}</span>
            <span>{item[field]}</span>
        </li>
    );
};

export { Record };

export default class ItemDetails extends Component {
    swapiService = new SwapiService();
    state = {
        item: null,
        isLoading: true,
        image: null
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem() {
        const { itemId, getData, getImageUrl } = this.props;

        if (!itemId) {
            return;
        }

        this.setState(() => {
            return {
                isLoading: true,
                item: null
            };
        });

        getData(itemId).then(item => {
            this.setState({ item, isLoading: false, image: getImageUrl(item) });
        });
    }

    render() {
        const spinner = this.state.isLoading ? <Spinner /> : null;
        const { item, image } = this.state;
        if (!item) {
            return <span>Select an item from a list</span>;
        }
        const { id, name } = item;

        return (
            <div className='person-details card mb-2'>
                {spinner}
                <img className='person-image' src={image} alt={name} />

                <div className='card-body'>
                    <h4>
                        {name} {id}
                    </h4>
                    <ul className='list-group list-group-flush'>
                        {React.Children.map(this.props.children, child => {
                            return React.cloneElement(child, { item });
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}
