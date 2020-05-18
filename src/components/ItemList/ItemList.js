import React from 'react';
import './item-list.css';

// Этот компонент будет обернут в HOC-компонент, работающий с данными. Все props будут прокинуты компонентом-оберткой
const ItemList = props => {
    const { data, onItemSelected, children: renderItem } = props;
    const items = data.map(item => {
        const { id } = item;
        const label = renderItem(item);

        return (
            <li
                className='list-group-item'
                key={id}
                onClick={() => onItemSelected(id)}
            >
                {label}
            </li>
        );
    });

    return <ul className='item-list list-group mb-3'>{items}</ul>;
};

export default ItemList;
