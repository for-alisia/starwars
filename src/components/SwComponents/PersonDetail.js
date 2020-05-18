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

export default PersonDetail;
