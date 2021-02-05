import './App.css';
import React, { Component } from 'react';



class App extends Component {
  state = {
  
          imgSrc: "https://scontent.ftun11-1.fna.fbcdn.net/v/t1.15752-9/138826987_2833415960252360_4360213869929852068_n.png?_nc_cat=106&ccb=2&_nc_sid=ae9488&_nc_ohc=j9KOc_c-jhQAX-5TyKC&_nc_ht=scontent.ftun11-1.fna&oh=7ae2aec200878743c49f4ff655615b9e&oe=604246F2",
            name: "Safa Zgaya",
            profession: "web developer",
            age: 24,
            email: "safa.zgaya@gmail.com",
            address:"Tunis",
            isLoading:true,
            otherLoding: true
            
          
  };
  
handleShow =()=>this.setState({isShow :!this.state.isShow});
componentDidMount(){
  setInterval(()=>this.setState({isLoading: false }), 2500);
  
  
}



  render() {
    if (this.state.isLoading) {
      return <h1>loading......</h1>
     {
     
        
      }
      
    }
    
    return (
      <div>
        <h1 className="my-profile" > My profile</h1>
    <button class="btn btn-primary btn-lg" onClick={()=>this.handleShow()} > {this.state.isShow ? "Hide" : "Show"}{" "}</button>   
        {this.state.isShow ? (
      <div>
      <img  className="avatar"  src={this.state.imgSrc} width="350" height="350"  />
      <div className="user-card">
      <h2> FullName : {this.state.name}</h2>
      <h2> Profession : {this.state.profession}</h2>
      <h2> Age : {this.state.age}</h2>
      <h2> Email: {this.state.email}</h2>
      <h2> Address : {this.state.address}</h2>  
      </div>
      </div>
        ) : null } 
          
      </div>
    );
  }
}

export default App;