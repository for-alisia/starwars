import React from 'react';
import ItemList from '../ItemList';
import { withData } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();
const { getAllPeople, getAllPlanets, getAllStarShips } = swapiService;

// Создаем еще один HOC - он будет привязывать нужную функцию-рендер к дочернему компоненту в качестве ребенка. Таким образом можно будет передавать кастомную функцию в любой компонент-список.
const withChildFunction = (Wrapped, fn) => {
    return props => {
        return <Wrapped {...props}>{fn}</Wrapped>;
    };
};

// Функции-рендеры для компонентов-списков
const renderName = ({ name }) => <span>{name}</span>;
const renderNameAndModel = ({ name, length }) => (
    <span>
        {name} (Length: {length})
    </span>
);

// Компоненты-списки. Получаются путем композиции(сочетания HOC) - сначала привязываем функцию-рендер к компоненту, рендерящему список, затем результат передаем в HOC, который управляет данными для компонентов-списков, также передав ему функцию для получения данных.
const PersonList = withData(
    withChildFunction(ItemList, renderName),
    getAllPeople
);

const PlanetList = withData(
    withChildFunction(ItemList, renderName),
    getAllPlanets
);

const StarshipList = withData(
    withChildFunction(ItemList, renderNameAndModel),
    getAllStarShips
);

export { PersonList, PlanetList, StarshipList };
