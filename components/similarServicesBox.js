import React from 'react';
import Button from '@material-ui/core/Button';

function ServiceBox() {

  const BtnStyle = {
    backgroundColor: '#85d27a',
    border: 'none',
    fontSize: '13px',
    color: '#000',
    width: '20px',
    height: '20px',
    marginRight: '5px',
  }


  return(
    <div className='box'>
      <img src={'https://cdn1.truelancer.com/upload-small/356009-4.jpg'}></img>
      <div className='inner'>
        <p>I will design an Awesome Logo Design for you</p>
        <div className='money'>
          <p>USD 12</p>
          <Button style={BtnStyle}>View</Button>
        </div>
      </div>

      <style jsx>{`
        .box {
          display: flex;
          border: 1px solid #d9d9d9;
          flex-direction: row;
          margin-top: 10px;
        }

        .box img {
          width: 64px;
          height: 64px;
        }
        
        .box .inner p {
          margin-bottom: 0;
        }

        .box .inner .money {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }

        @media only screen and (max-width: 768px) {
          .box .inner {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}

export default ServiceBox;