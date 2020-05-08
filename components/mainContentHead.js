import React from 'react';
import Button from '@material-ui/core/Button';

function MainContentHead() {

  const buttonStyle = {
    backgroundColor: '#85d27a',
    border: 'none',
    fontSize: '15px',
    marginLeft: '100px',
    color: '#fff',
    margin: '0 auto',
    textTransform: 'capitalize'
  }

  return(
    <div className='mainContentHead container'>
      <div className='row'>
        <section className='left col-md-8'>
          <h1>
            I will Design Professional unique logo design+Unlimited Revision+source files for $25 
          </h1>
          <ul>
            <li className='text'>Posted: 2 years ago In <span>Graphic Design & Multimedia</span> » <span>Logo Design</span></li>
            <li className='icon'><i className="fa fa-heart"></i></li>
            <li className='icon'><i className="fa fa-eye">13537</i></li>
            <li className='icon visibleShareIcon'><i className='fa fa-share-alt'> Share</i></li>
            <li className='icon hiddenShareIcon'><i className='fa fa-share-alt'> </i></li>
          </ul>
        </section>

        <section className='d-flex align-items-center flex-column middle col-md-2'>
          <h6>106 sold</h6>
          <h6>84 feedback</h6>
          <div className='starRating d-flex'>
            <h6>4.8</h6>
            <span className='fa fa-star checked'></span>
            <span className='fa fa-star checked'></span>
            <span className='fa fa-star checked'></span>
            <span className='fa fa-star checked'></span>
            <span className='fa fa-star checked'></span>
          </div>
        </section>

        <section className='right col-md-2 d-flex flex-column align-items-center'>
          <Button style={buttonStyle}>buy now($25)</Button>
          <p>will deliver in 3 days</p>
        </section>
      </div>

    <style jsx>{`
      .mainContentHead {
        background-color: #fff;
        border-top: 10px solid #85d27a;
        padding-top: 10px;
        max-width: 1152px;
      }

      .container .row .left h1 {
        font-size: 20px;
        color: #000;
      }

      .container .row .left ul {
        display: flex;
        padding: 0;
        list-style: none;
      }
      
      .container .row .left ul .text {
        font-size: 15px;
        margin-right: 100px;
      }

      .container .row .left ul .visibleShareIcon {
        display: inline-block;
        cursor: pointer;
        border-radius: 5px;
        padding: 2px;
        background-color: #eee;
      }

      .container .row .left ul .hiddenShareIcon {
        display: none;
      }

      .container .row .left ul .text span {
        color: orange;
        cursor: pointer;
      }

      .container .row .left ul .icon {
        margin-left: 15px;
      }

      .container .row .middle .starRating .checked {
        color: orange;
      }

      .container .row .middle .starRating h6 {
        display: inline-block;
        background-color: orange;
        color: #fff;
        padding: 2px;
        margin-right: 5px;
      }

      @media only screen and (max-width: 480px) {
        .container .row .left ul .text {
          margin-right: 0px;
        }

        .container .row .left ul .visibleShareIcon {
          display: none;
        }

        .container .row .left ul .hiddenShareIcon {
          display: block;
          cursor: pointer;
        }
      }
    `}</style>
    </div>
  )
}

export default MainContentHead;