import React, { Component } from 'react';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';
import './error-boundary.css';

// Специальный компонент-обертка, который перехватывает ошибки и показывает компонент - ErrorIndicator. Фактически создает границы всплытия ошибки и позволяет отлавливать их на уровне отдельного блока, а не приложения в целом. Проверяет наличие ошибки при помощи встроенного метода компонента componentDidCatch, отображает либо блок ошибки, либо всех children
export default class ErrorBoundary extends Component {
    state = {
        hasError: false
    };

    componentDidCatch() {
        this.setState({
            hasError: true
        });
    }
    render() {
        return this.state.hasError ? <ErrorIndicator /> : this.props.children;
    }
}
