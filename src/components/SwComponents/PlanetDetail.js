import React from 'react';
import ItemDetails, { Record } from '../ItemDetails';
import { SwapiServiceConsumer } from '../SwapiServiceContext';

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

export default PlanetDetail;
