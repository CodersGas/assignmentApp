import React from 'react';
import Button from '@material-ui/core/Button';

function HiddenMenu() {

  const buttonStyle = {
    backgroundColor: '#85d27a',
    border: 'none',
    fontSize: '15px',
    color: '#fff',
    margin: '0 auto',
    textTransform: 'uppercase'
  }

  return(
    <div className='menu'>
      <ul>
        <li><Button style={buttonStyle}>post project</Button></li>
        <li><i className='fa fa-briefcase'></i> find jobs</li>
        <li><i className='fa fa-user'></i> find freelancers</li>
        <li>login</li>
        <li>signup</li>
      </ul>

      <style jsx >{`
        .menu {
          background-color: #3d3d3d;
        }

        .menu ul {
          display: flex;
          flex-direction: column;
          list-style: none;
          padding-left: 0;
        }

        .menu ul li {
          color: #eee;
          cursor: pointer;
          text-transform: uppercase;
          padding: 10px;
          border-bottom: 1px solid #d9d9d9;
        }
      `}</style>
    </div>
  )
}

export default HiddenMenu;