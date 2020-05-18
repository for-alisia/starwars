import React from 'react';

// Создаем контекст для сервиса получение данных с сервера, используя context-API. Такми образом мы проинициализируем Provider на уровне App, передав в него экземпляр SwapiService, а в компоненты, которым нужны данные, обернем в Consumer
const {
    Provider: SwapiServiceProvider,
    Consumer: SwapiServiceConsumer
} = React.createContext();

export { SwapiServiceProvider, SwapiServiceConsumer };
