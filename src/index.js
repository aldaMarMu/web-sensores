import React from 'react';
import ReactDOM from 'react-dom';
import datos_img from './datos_img.jpg';
import './index.css';

class Sensor extends React.Component {
  constructor(){
    super();
    
    this.state={
      menuSensor: false,
    }

    this.menuSensor=this.menuSensor.bind(this);
    this.cierraMenuSensor=this.cierraMenuSensor.bind(this);
  }

  menuSensor(event){
    event.preventDefault();
    this.setState({ menuSensor: true }, () => {
      document.addEventListener('click', this.cierraMenuSensor);
    });
  }

  cierraMenuSensor(){
    this.setState({menuSensor: false}, () => {
      document.removeEventListener('click', this.cierraMenuSensor);
    });
  }

  render() {
    return (
      <div className="botones">
        <button className="butSensor" onClick={this.menuSensor}>          
          <h1>Sensor {this.props.nSensor}</h1>
          <p><img src ={datos_img} className ="imgSensor" alt="datos_img"/></p>
          <p>Temperatura actual = {this.props.nSensor}</p>
        </button>
        {
          this.state.menuSensor 
            ? (
              <div className="menuSensor">
                <button>ON/OFF</button>
                <button>Unidades</button>
              </div>
            ) 
            : (
              null
            )
        }
      </div>
    );
  }
}

class Cuadrante extends React.Component {
  constructor(props){
    super(props);
  }

  renderSensor(i) {
    return <Sensor nSensor={i}/>;
  }

  render() {
    const status = "Hay 3 sensores conectados en este momento.";
    return (
      <div>
        <table>
          <tr>
            <td className="status">{status}</td>
            <td> Viernes, mejor día de la semana </td>
          </tr>
        </table>
        <div className="sensor-row">
          {this.renderSensor(1)}
          {this.renderSensor(2)}
          {this.renderSensor(3)}
        </div>
        <div className="sensor-row">
          {this.renderSensor(4)}
          {this.renderSensor(5)}
          {this.renderSensor(6)}
        </div>
      </div>
    );
  }
}

class Monitor extends React.Component {
  render() {
    return (
      <div className="pagina">
        <div className="titulo">
          <h2> Sensorización de estancia </h2>
        </div>
        <div className="cuadro-uno">
          <Cuadrante />
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Monitor />,
  document.getElementById('root')
);

