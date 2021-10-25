import React from "react";
import ReactDOM from "react-dom";
import "./public/css/Login/login.css";

class FluidInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      value: ""
    };
  }
  focusField() {
    const { focused } = this.state;
    this.setState({
      focused: !focused
    });
  }
  handleChange(event) {
    const { target } = event;
    const { value } = target;
    this.setState({
      value: value
    });
  }
  render() {
    const { type, label, style, id } = this.props;
    const { focused, value } = this.state;
    
    let inputClass = "fluid-input";
    if (focused) {
      inputClass += " fluid-input--focus";
    } else if (value != "") {
      inputClass += " fluid-input--open";
    }
    
    return (
      <div className={inputClass} style={style}>
        <div className="fluid-input-holder">
          
          <input 
            className="fluid-input-input"
            type={type}
            id={id}
            onFocus={this.focusField.bind(this)}
            onBlur={this.focusField.bind(this)}
            onChange={this.handleChange.bind(this)}
            autocomplete="off"
          />
          <label className="fluid-input-label" forHtml={id}>{label}</label>
          
        </div>
      </div>
    );
  }
}

class Button extends React.Component {
  render() {
    return (
      <div className={`button ${this.props.buttonClass}`} onClick={this.props.onClick}>
        {this.props.buttonText}
      </div>
    );
  }
}

class LoginContainer extends React.Component {
  render() {
    return (
      <div className="login-container">
		<div className="logo"></div>
        <div className="title">NAATA</div>
		<input className="input icon" placeholder='Email or Phone number'></input>
		<div className="button-custom">
			<div className="button-title">Next</div>
			<button className="button-arrow"></button>
		</div>
      </div>
    );
  }
}

export default LoginContainer;