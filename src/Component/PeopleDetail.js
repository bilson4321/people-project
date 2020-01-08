import React from 'react';
import './PeopleDetail.css';

class PeopleDetail extends React.Component{
  constructor(props)
    {
      super(props);
    }
  render()
  {
    
    return (
      
      <div className="container">
        {
          <React.Fragment>
            <div className="image-holder">
              <img className='profile-image' src={this.props.profile.profileImage}></img>
              <div className="close-button" onClick={()=>this.onclick()}>X</div>
            </div>
            <div>
              <h2><u>Details</u></h2>
              <label>Name : </label>
              <span>{this.props.profile.firstName} </span>
              <span>{this.props.profile.lastName}</span><br />
              <label>Phone : </label>
              <span>{this.props.profile.phone}</span><br />
              <label>Email : </label>
              <span>{this.props.profile.email}</span><br />
              <label>Address : </label>
              <span>
                {this.props.profile.address.city}, {this.props.profile.address.state}, {this.props.profile.address.country} <br />
                {this.props.profile.address.zipCode}, {this.props.profile.address.countryCode}, {this.props.profile.address.streetAddress}
              </span>
           </div>
          </React.Fragment>
        }
      </div>
      )
  }
  onclick()
  {
    this.props.closeFunction();
    console.log("Close");
  }
}
export default PeopleDetail;