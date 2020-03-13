import React, { Component } from 'react';

class Section1 extends Component {
  constructor(props) {
    super(props);
    this.state = {

      number: "****************",

      name: "FOULEN",

      date: "12/08",

    }

  }

  ChangeDate = (event) => {
    if(event.target.value.substring(0, 2)<=12){
    
    this.setState({
      date: event.target.value.substring(0, 2) +
        "/" + event.target.value.substring(2, 4),
    })}
    else if(event.target.value.substring(0, 2)>12){
      this.setState({
        date:"0"+ event.target.value.substring(0, 1) + "/"+event.target.value.substring(1, 3)
      
      })}
    

    
  }
  Changenum = (e) => {
    const regex = /[0-9]/g
    if(typeof(parseInt(e.target.value))&&(regex.test(e.target.value))) {
      console.log(typeof(parseInt(e.target.value)))
      this.setState({number:e.target.value})
    }
   
  
  }
  changename=(e) =>{
    
    this.setState({name:e.target.value})
  }

  
    
  


  render() {
    return (<div className="bloc">

      <div className="col">
        <span>{this.state.number.padEnd(16, "*")}</span>
        <h6>{this.state.date}</h6>
        <p>{(this.state.name.match(/^[A-Za-z\D]+$/g)||this.state.name=="")?this.state.name:alert("please add a valid name ") }</p>
</div>
      <div className="form"><form>
        
      
        <input type="text" maxLength="20" onChange={this.Changenum} />
        <input
          type="text"
          datatype="DD MM"
          placeholder={this.state.date}
          onChange={this.ChangeDate}
          maxLength="4"
          
        />
        <input type="text" maxLength="20" onChange={this.changename}/>

      </form></div></div>
    );
  }
}

export default Section1;