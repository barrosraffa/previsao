import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import * as serviceWorker from "./serviceWorker";

const previsao31_05 = {
  data: "31/05/2019",
  resumo: "Ensolarado",
  imagem:
    "https://www.onlygfx.com/wp-content/uploads/2018/09/4-clipart-sun-1.png",
  temperatura: {
    max: 31,
    min: 20
  }
};

const previsao01_06 = {
  data: "01/06/2019",
  resumo: "Nublado",
  imagem:
    "https://cdn.pixabay.com/photo/2013/04/01/09/22/clouds-98536_960_720.png",
  temperatura: {
    max: 25,
    min: 18
  }
};

function Card(props) {
  return (
    <div className="previsao-container">
      <div className="previsao">
        <h2 className="previsao__data">{props.data}</h2>
        <p className="previsao__resumo">{props.resumo}</p>
        <img className="previsao__img" src={props.imagem} />
        <table className="previsao-temperatura__linha">
          <div>
            <th>Máxima</th>
            <td>{props.max}°C</td>
          </div>
          <div>
            <th>Mínima</th>
            <td>{props.min}°C</td>
          </div>
        </table>
      </div>
    </div>
  );
}

class Container extends React.Component {
  render() {
    return (
      <div className="previsao-container">
        <Card
          data={previsao31_05.data}
          resumo={previsao31_05.Ensolarado}
          imagem={previsao31_05.imagem}
          max={previsao31_05.temperatura.max}
          min={previsao31_05.temperatura.min}
        />
        <Card
          data={previsao01_06.data}
          resumo={previsao01_06.Nublado}
          imagem={previsao01_06.imagem}
          max={previsao01_06.temperatura.max}
          min={previsao01_06.temperatura.min}
        />
      </div>
    );
  }
}

ReactDOM.render(<Container />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
