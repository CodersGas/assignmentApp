import React from 'react';
import Button from '@material-ui/core/Button';
import HiddenMenu from './hiddenMenu';
import ReactCSSTransitionGroup from 'react-transition-group';

class AppHeader extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showHiddenMenu: false
    }
  }

  handleMenu = () => {

    if(!this.state.showHiddenMenu) {
      this.setState({
        showHiddenMenu: true
      });
    } else {
      this.setState({
        showHiddenMenu: false
      })
    }
  }

  render() {

  const buttonStyle = {
    marginRight: '20px',
    backgroundColor: '#85d27a',
    border: 'none',
    fontSize: '13px',
    marginLeft: '100px',
    color: '#fff',
  }

  return (
    <div className='navContainer'>
      <div className='container'>
        <nav className='navigationBarContainer'>
          <ul className='visibleMenu'>
            <li><img src='https://static.truelancer.com/truelancer-logo1.png'></img></li>
            <li className='logo'>truelancer</li>
            <li><Button style={buttonStyle}>Post Project</Button></li>
            <li> <i className='fa fa-trophy'></i> contest</li>
            <li> <i className='fa fa-shopping-cart'></i> buy services</li>
            <li>find jobs</li>
            <li>find freelancers</li>
            <li><a>login</a></li>
            <li><a>signUP</a></li>
          </ul>

        <ul className='hiddenMenu'>
          <li><img src='https://static.truelancer.com/truelancer-logo1.png'></img> truelancer</li>
          <button onClick={this.handleMenu}>Menu</button>
        </ul>
      </nav>
      
      {this.state.showHiddenMenu && <HiddenMenu />}
    </div>
      <style jsx>{`

        html, body {
          font-family: sans-serif;
          box-sizing: border-box;
        }
        
        .navContainer {
          margin-bottom: 10px;
        }

        .navContainer .container {
          max-width: 100%;
          padding: 0;
        }

        .navContainer .container .menu {
          display: none;
        }

        .navContainer .container nav {
          background-color: #55badf;
          display: flex;
          justify-content: space-evenly;
          flex-wrap: wrap;
        }

        .navContainer .container nav .hiddenMenu {
          display: none;
        }

        .navContainer .container nav ul {
          display: flex;
          justify-content: space-around;
          align-items: center;
          list-style: none;
          text-transform: uppercase;
          color: #fff;
          margin-bottom: 0;
          padding: 0;
          flex-wrap: wrap;
        }
        
        nav ul .logo {
          font-size: 20px;
          text-transform: capitalize;
        }
        
        nav ul .menuBtn {
          display: none;
        }

        nav ul li {
          padding: 8px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          font-family: sans-serif;
        }

        @media only screen and (max-width: 768px) {
          .navContainer .container nav .hiddenMenu {
            display: flex;
            justify-content: space-between;
            width: 100%;
          }

          .navContainer .container nav .hiddenMenu li {
            font-size: 20px;
            text-transform: capitalize;
          }

          .navContainer .container nav .hiddenMenu button {
            border: none;
            border: 1px solid #fff;
            border-radius: 5px;
            background-color: #eee;
            outline: none;
          }
          .navContainer .container nav .visibleMenu {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}
}

export default AppHeader;