import React from 'react';
function Feedback() {
  return(
    <React.Fragment>
      <div className='comment col-md-12'>
      
        <div className='userDetails'>
          <i className='fa fa-user-circle'></i>
        
          <div className='nameAndText'>
            <p className='userName'>User1</p>
            <p className='userText'>Good Design. Will come back again.</p>
          </div>
        </div>

        <div className='userRating'>
          <div className='starRating d-flex'>
            <span className='fa fa-star checked'></span>
            <span className='fa fa-star checked'></span>
            <span className='fa fa-star checked'></span>
            <span className='fa fa-star checked'></span>
            <span className='fa fa-star checked'></span>
          </div>
          <p className='time'>2 months ago</p>
          <p className='date'>22 Feb, 2020</p>
        </div>
      </div>

      <div className='commentBack col-md-11'>
              
      <div className='userDetails'>
          <i className='fa fa-user-circle'></i>
        
          <div className='nameAndText'>
            <p className='userName'>User1</p>
            <p className='userText'>Good Design. Will come back again.</p>
          </div>
        </div>

        <div className='userRating'>
          <div className='starRating d-flex'>
            <span className='fa fa-star checked'></span>
            <span className='fa fa-star checked'></span>
            <span className='fa fa-star checked'></span>
            <span className='fa fa-star checked'></span>
            <span className='fa fa-star checked'></span>
          </div>
          <p className='time'>2 months ago</p>
          <p className='date'>22 Feb, 2020</p>
        </div>
      </div>
      <style jsx>{`
        .comment {
          display: flex;
          justify-content: space-between;
          border-left: 10px solid #3bafda;
          border-radius: 5px;
          background-color: #f2f2f2;
          padding: 10px;
          margin-bottom: 10px;
        }

        .comment .userDetails,
        .commentBack .userDetails {
          display: flex;
        }

        .comment .userDetails i,
        .commentBack .userDetails i {
          font-size: 35px;
        }

        .comment .userDetails .nameAndText,
        .commentBack .userDetails .nameAndText{
          margin-left: 15px;
        }

        .comment .userDetails .nameAndText .userName,
        .comment .userRating .time,
        .comment .userRating .date,
        .commentBack .userDetails .nameAndText .userName,
        .commentBack .userRating .time,
        .commentBack .userRating .date{
          margin: 0;
        }

        .comment .userRating .starRating .checked,
        .commentBack .userRating .starRating .checked {
          color: orange;
        }
        
        .commentBack {
          display: flex;
          justify-content: space-between;
          border-left: 10px solid #37bc9b;
          border-radius: 5px;
          background-color: #f2f2f2;
          padding: 10px;
          margin-bottom: 10px;
          align-self: end;
        }

        @media only screen and (max-width: 480px) {
          .commentBack {
            max-width: 320px;
          }
        }
      `}</style>
    </React.Fragment>
  )
}

export default Feedback;