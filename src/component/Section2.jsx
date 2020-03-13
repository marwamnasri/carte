import React, { Component } from 'react';
 class Section2 extends Component {
    constructor(props) {
      super(props);
      this.state = {
        nom: "Enter the user name",
        Date: "12/08",
        
        
      };
  
      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangeDate = this.handleChangeDate.bind(this);
    }
  
    handleChangeName(event) {
      var onlyTextRegex = /[^A-Za-z]/g;
      if (event.target.value.match(onlyTextRegex)) {
        this.setState({
          validUser: { status: false, message: "Tape only text" }
        });
      } else if (event.target.value.length > 20) {
        this.setState({ validUser: { status: false, message: "Max length 20" } });
      } else {
        this.setState({
          userName: event.target.value,
          valid: { status: true, message: "" }
        });
      }
    }
  
    
    
  
    render() {
      const { validUser } = this.state;
      const { validDate } = this.state;
      return (
        <div className="displayCard">
          <div className="bgCreditCard">
            <div className="titleCard">
              <h1>Credit card</h1>
            </div>
            <div className="simCard">
              <img
                className="simCardImage"
                src="https://uploads.codesandbox.io/uploads/user/8f10ee4c-10fc-41b7-885a-4b795b293c1d/hh7c-chip.png"
                alt=""
              />
            </div>
            <div className="idCard">
              <h2 className="idCardNumber">7253 3266 5284 8621</h2>
            </div>
            <div className="userCard">
              <div className="userCardID">5422</div>
              <div className="userCardValidation">
                <div className="bloc1">
                  Valid <br />
                  thru
                </div>
                <div className="bloc2">
                  month/year
                  <br />
                  <span>{this.state.validThru}</span>
                </div>
              </div>
            </div>
            <div className="userCardDescription">{this.state.userName}</div>
            <div className="cardType">
              <img
                className="simCardImage"
                src="https://uploads.codesandbox.io/uploads/user/8f10ee4c-10fc-41b7-885a-4b795b293c1d/aFYl-visa.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="inputInterface">
            <input
              type="text"
              placeholder={this.state.displayMessageUser}
              onChange={this.handleChangeName}
            />
            {!validUser.status ? (
              <span style={{ color: "#ff0000" }}>{validUser.message}</span>
            ) : null}
            <input
              type="date"
              datatype="DD MM"
              placeholder={this.state.displayMessageDate}
              onChange={this.handleChangeDate}
            />
            {!validDate.status ? (
              <span style={{ color: "#ff0000" }}>{validDate.message}</span>
            ) : null}
          </div>
        </div>
      );
    }
  }
 
export default Section2;