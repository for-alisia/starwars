import React from 'react';
import ItemDetails, { Record } from '../ItemDetails';
import { SwapiServiceConsumer } from '../SwapiServiceContext';

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

export default StarshipDetail;
