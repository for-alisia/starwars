import React from 'react';
import ItemDetails, { Record } from '../ItemDetails';
import { SwapiServiceConsumer } from '../SwapiServiceContext';

const PersonDetail = ({ itemId }) => {
    return (
        // Оборачиваем компонент в Consumer, чтобы дать доступ к swapiService. Consumer принимает функцию, поэтому обернем компонент
        <SwapiServiceConsumer>
            {({ getPerson, getPersonImage }) => {
                return (
                    <ItemDetails
                        itemId={itemId}
                        getData={getPerson}
                        getImageUrl={getPersonImage}
                    >
                        <Record field='gender' label='Gender' />
                        <Record field='eyeColor' label='Eye color' />
                    </ItemDetails>
                );
            }}
        </SwapiServiceConsumer>
    );
};

const PlanetDetail = ({ itemId }) => {
    return (
        <SwapiServiceConsumer>
            {({ getPlanet, getPlanetImage }) => {
                return (
                    <ItemDetails
                        itemId={itemId}
                        getData={getPlanet}
                        getImageUrl={getPlanetImage}
                    >
                        <Record field='population' label='Population' />
                        <Record field='diameter' label='Diameter' />
                    </ItemDetails>
                );
            }}
        </SwapiServiceConsumer>
    );
};

const StarshipDetail = ({ itemId }) => {
    return (
        <SwapiServiceConsumer>
            {({ getStarShip, getStarShipImage }) => {
                return (
                    <ItemDetails
                        itemId={itemId}
                        getData={getStarShip}
                        getImageUrl={getStarShipImage}
                    >
                        <Record field='model' label='Model' />
                        <Record field='length' label='Length' />
                    </ItemDetails>
                );
            }}
        </SwapiServiceConsumer>
    );
};

export { PersonDetail, PlanetDetail, StarshipDetail };
