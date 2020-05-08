import React from 'react';
import ImageSlider from './imageSlider';
import Feedback from './feedbackComponent';
import Seller from './aboutSeller';
import ServiceBox from './similarServicesBox';
import Button from '@material-ui/core/Button';

class MainContent extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      hasMounted: false,
    }
  }

  componentWillMount() {
    this.setState({
      hasMounted: true
    })
  }

  render() {

  const buttonStyle = {
    marginRight: '20px',
    backgroundColor: '#85d27a',
    border: 'none',
    fontSize: '13px',
    marginLeft: '100px',
    color: '#fff',
    justifySelf: 'center',
    marginBottom: '10px',
  }
  return (
    <div className='container'>
      <div className='row'>
        <section className='col-md-9 leftSection'>
          
          <div className='header'>
            <span className='fa fa-user-circle'></span>
            <span className='fa fa-user-circle'></span>
            <span className='fa fa-user-circle'></span>
            <span className='fa fa-user-circle'></span>
            <span className='fa fa-user-circle'></span>
            <h6><span>+98 others</span> have already bought this. I want to <span>Buy Now »</span></h6>
          </div>

          {this.state.hasMounted && <ImageSlider />}

          <div className='belowSlider'>
            <h4>What will you get</h4>

            <p>
              <span className='decoratedText'>Congratulations,</span> on finding my Logo design Services!
              If you are looking for professional, Unique, perfect logo for your brand, 
              Business, Website, Blog, etc. you have come to the right place. 
              I provide unique, 100% satisfactory standout designs that will surely make your business distinct from others.
              What you will receive: <br />
              <span className='tick'>&#10003;</span> 100% Unique Logo (Original Concepts, no junk, no template)<br />
              <span className='tick'>&#10003;</span>  Unlimited revisions until you will be 100% satisfied. <br />
              <span className='tick'>&#10003;</span>  100% Copyright Ownership. <br />
              <span className='tick'>&#10003;</span>  24 x 7 Premium Support (Life Time). <br />
              <span className='tick'>&#10003;</span>  Convert image to any size without the loss of quality. <br />
              <span className='tick'>&#10003;</span>  Vector file, Source File and Print File (Ai, EPS, PSD, PDF, PNG,) <br />
            </p>

            <p className='importantText'>
              <span>&#9733; IMPORTANT &#9733;</span><br />
              If you need a complex cartoon character design/ a very intricate design, 
              please inquire first as it may incur additional costs. 
              By purchasing this service you agree to complete this project within 3 days.<br />
              <br />
              This service starts with me creating 3 different, unique logo concepts for you. After you 
              choose the one you like the best, we mutually develop it until we get the perfect logo.
            </p>

            <p>
              My approach to every single project is unique, creative and professional.<br />
              Now look forward to creating a unique identity for you. <br />
              Please, Don't come with any illegal content. <br />
              BUY NOW <br />
              Thank you so much
            </p>

            <p className='importantText'>
              FAQ: What are Unlimited revisions? <br />
              Unlimited revisions are limited only to ONE selected logo, revision means changing the colour or Font face. 
              The revision does not mean you will get unlimited new logo designs.
            </p>

            <h5>
              What the Seller needs to start the work
            </h5>
            <ol>
              <li>Name to incorporate into the logo / Logo Text</li>
              <li>Tagline optional</li>
              <li>Type of business</li>
              <li>Color preferences</li>
              <li>Target Markets </li>
            </ol>
          </div>
          
          <div className='feedbackSection'>
            <h4>Service Feedbacks</h4>
            <div className='userFeedbacks'>
              <Feedback />
              <Feedback />
              <Feedback />
              <Feedback />
              <Feedback />
              <Feedback />
            </div>
            
            <div className='btnWrapper'>
              <Button style={buttonStyle}>Show More(85)</Button>
            </div>
          </div>
        </section>

        <section className='col-md-3 rightSection'>
          
          <div className='aboutSeller'>
            <Seller />
          </div>


          <div className='jobSatisfaction'>
            <div className='secIcon'>
              <img src="https://img.icons8.com/cute-clipart/64/000000/application-shield.png"/>
            </div>

            <div className='secText'>
              <p className='first'>100% Secure</p>
              <p>Job is done or money back</p>
            </div>
          </div>

          <div className='points'>
            <ul>
              <li>You pay only the listed price without any hidden costs.</li>
              <li>We keep your money until you are happy with the delivered work.</li>
              <li>The job will be done or your money will be returned.</li>
            </ul>
          </div>

          <div className='tagsAndSkills'>
            <p className='header'>Tags & Skills</p>
            <p className='badge badge-secondary'>business cards</p>
            <p className='badge badge-secondary'>logo design</p>
            <p className='badge badge-secondary'>graphic design</p>
            <p className='badge badge-secondary'>clipping path</p>
            <p className='badge badge-secondary'>icon design</p>
            <p className='badge badge-secondary'>logo design</p>
          </div>

          <div className='similarServices'>
            <h5>Similar Services</h5>
            <ServiceBox />
            <ServiceBox />
            <ServiceBox />
            <ServiceBox />
            <ServiceBox />
          </div>
        </section>
      </div>

    <style jsx>{`
      .container {
        background-color: #fafafa;
        max-width: 1152px;
        margin-bottom: 20px;
      }

      .container .row .leftSection {
        border-right: 1px solid #d9d9d9;
      }

      .container .row .leftSection .header{
        display: flex;
        margin-right: 5px;
        font-size: 25px;
        border-bottom: 1px solid #d9d9d9;
        padding-bottom: 5px;
      }

      .container .row .leftSection .header span {
        margin-right: 5px;
        cursor: pointer;
      }

      .container .row .leftSection .header h6 {
        margin-left: 10px;
      }

      .container .row .leftSection .header h6 {
        color: #827ea8;
      }

      .container .row .leftSection .header h6 span {
        color: #000;
        cursor: pointer;
      }

      .container .row .leftSection .belowSlider h4,
      .container .row .leftSection .belowSlider h5{
        border-bottom: 1px solid #d9d9d9;
        padding-bottom: 5px;
      }

      .container .row .leftSection .belowSlider p {
        color: #767676;
        font-size: 14px;
      }

      .container .row .leftSection .belowSlider p .decoratedText {
        color: #000;
        text-decoration: underline;
      }

      .container .row .leftSection .belowSlider p .tick {
        color: #000;
        font-weight: 600;
      }

      .container .row .leftSection .belowSlider .importantText {
        color: #7e7686;
        font-weight: 700;
      }

      .container .row .leftSection .belowSlider h5 {
        margin-top: 50px;
      }

      .container .row .leftSection .belowSlider ol {
        list-style-type: decimal;
      }

      .container .row .leftSection .feedbackSection {
        margin-top: 50px;
        border-right: none;
      }

      .container .row .leftSection .feedbackSection h4 {
        border-bottom: 1px solid #d9d9d9;
        padding: 5px;
      }

      .container .row .leftSection .feedbackSection .userFeedbacks {
        display: flex;
        flex-direction: column;
      }

      .container .row .leftSection .feedbackSection .btnWrapper {
        text-align: center;
      }

      .container .row .rightSection .aboutSeller {
        border: 1px solid #d9d9d9;
        background-color: #fff;
      }

      .container .row .rightSection .jobSatisfaction {
        display: grid;
        grid-template-columns: 1fr 2fr;
        margin-top: 20px;
        border: 1px solid #d9d9d9;
        padding: 5px;
        background-color: #fff;
      }

      .container .row .rightSection .jobSatisfaction .secText p {
        margin: 0;
        font-size: 14px;
      }

      .container .row .rightSection .jobSatisfaction .secText,
      .container .row .rightSection .jobSatisfaction .secIcon {
        margin: 0 auto;
      }

      .container .row .rightSection .jobSatisfaction .secText .first {
        font-size: 25px;
      }

      .container .row .rightSection .points {
        background-color: #fff;
        margin-top: 20px;
        border: 1px solid #d9d9d9;
        padding: 5px;
        padding-left: 0;
      }

      .container .row .rightSection .points ul {
        list-style: disc;
      }

      .container .row .rightSection .points ul li {
        font-size: 15px;
        margin-top: 10px;
      }

      .container .row .rightSection .tagsAndSkills {
        background-color: #fff;
        border: 1px solid #d9d9d9;
        margin-top: 20px;
        text-align: center;
        padding-bottom: 8px;
      }

      .container .row .rightSection .tagsAndSkills .header {
        text-align: start;
        border-bottom: 1px solid #d9d9d9;
      }

      .container .row .rightSection .tagsAndSkills p {
        margin: 5px;
        padding: 6px;
        text-transform: uppercase;
        cursor: pointer;
      }

      .container .row .rightSection .similarServices h5{
        font-size: 18px;
        margin-top: 20px;
      }
    `}</style>
    </div>
  )
}
}

export default MainContent;