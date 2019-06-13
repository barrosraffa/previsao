import React from 'react';

const Temperatura = (props) => {
    return (
        <table className="previsao-temperatura">
        <tr className="previsao-temperatura__linha">
        <th>Maximo</th>
        <td>{props.temperatura.max}°C</td>
        </tr>
        <tr className="previsao-temperatura__linha">
        <th>Minimo</th>
        <td>{props.temperatura.min}°C</td>
        </tr>
        </table>
    )
}

export default Temperatura;
