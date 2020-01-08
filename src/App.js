import React from 'react';
import './App.css';
import PeopleDetail from './Component/PeopleDetail';
import Header from './Component/Header';


class App extends React.Component{
  constructor()
    {
      super();
      this.state={
        people:[],
        detail:false,
        profile:{}
      }
    }
  componentDidMount()
  {
      fetch("https://mock-io.herokuapp.com/users?_limit=10")
      .then(response=>response.json())
      .then(response=>this.setState({people:response}))
  }
  render()
  {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
        {
          this.state.detail?
            <PeopleDetail profile={this.state.profile} closeFunction={this.closeDetail} />
            :
            <ul>
              {this.state.people.map((value)=>{
                      return <li key={value.id}>
                                <div className='thumbnail-profile' onClick={()=>this.onclick(value.id)}>
                                  <img className='thumbnail-icon' src={value.profileImage}></img>
                                  <div className='name-placeholder'>
                                    {value.firstName} 
                                    {"      "}
                                    {value.lastName}
                                  </div>
                                </div>                
                              </li>
                      })}
            </ul>
        }
      </div>
      </React.Fragment>
      )
  }
  onclick(id)
  {
    console.log("id of:",id);
    this.setState({detail:true}); 
    this.setState({profile:this.state.people[id-1]});
  }
  closeDetail=()=>
  {
    this.setState({detail:false});
    this.setState({profile:{}});
    console.log("stop");
  }
}
export default App;
