import React from 'react';
import './Header.css';

class Header extends React.Component{
  constructor(props)
    {
      super(props);
    }
  render()
  {
    
    return (
        <div className="header"><h1>People</h1></div>
      );
  }
}
export default Header;