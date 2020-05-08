import React from 'react';

function Seller() {
  return(
    <React.Fragment>
      <h5>About the Seller</h5>
      <div className='sellerDetails'>
      
        <div className='sellerImage col-md-6'>
          <i className='fa fa-user-circle'></i>
        </div>
        
        <div className='sellerRating col-md-6'>
          <p className='sellerName'>Seller Name</p>
          <p className='countryName'>Country</p>
          <span className='fa fa-star checked'></span>
          <span className='fa fa-star checked'></span>
          <span className='fa fa-star checked'></span>
          <span className='fa fa-star checked'></span>
          <span className='fa fa-star checked'></span>
          <p>(100)</p>
        </div>
        </div>

      <style jsx>{`
        h5 {
          border-bottom: 1px solid #d9d9d9;
          padding: 5px;
        }

        .sellerDetails {
          display: grid;
          grid-template-rows: 1fr 1fr;
        }

        .sellerDetails .sellerImage {
          align-self: center;
          font-size: 50px;
          justify-self: center;
          text-align: center;
        }

        .sellerDetails .sellerRating {
          text-align: center;
          justify-self: center;
        }

        .sellerDetails .sellerRating .sellerName,
        .sellerDetails .sellerRating .countryName {
          margin: 0;
          width: 100%;
        }

        .sellerDetails .sellerRating .checked {
          color: orange;
        }
      `}</style>
    </React.Fragment>
  )
}

export default Seller;