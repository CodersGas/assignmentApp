import React from 'react';

function Footer() {
  return(
    <div className='container footerContainer'>
      <div className='row'>
        <footer className='col-md-10'>
          
          <div className='row upperRow'>
            <section className='col-md-2 menu'>
              <ul>
                <li className='top'>Useful links</li>
                <li>
                  <select id='currency' name='currency'>
                    <option value='USD' selected>USD</option>
                    <option value='INR'>INR</option>
                  </select>
                  </li>
                <li>Mobile App</li>
                <li>Startups</li>
                <li>Truelancer Prime</li>
                <li>Affiliate</li>
              </ul>
            </section>

            <section className='col-md-2 menu'>
              <ul>
                <li className='top'>Company</li>
                <li>Careers</li>
                <li>Contact Us</li>
                <li>About Us</li>
                <li>Press</li>
                <li>Blog</li>
              </ul>
            </section>

            <section className='col-md-2 menu'>
              <ul>
                <li className='top'>Information</li>
                <li>Fee and Charges</li>
                <li>Cancellation & Refunds</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>FAQ & Usegul Links</li>
                <li>Memerbership Policy</li>
              </ul>
            </section>

            <section className='col-md-2 menu'>
              <ul>
                <li className='top'>Content Writers</li>
                <li>Content Writers</li>
                <li>Academic Writers</li>
                <li>Blog Writers</li>
                <li>Technical Writers</li>
                <li>Copywriters</li>
                <li>SEO Writers</li>
              </ul>
            </section>
            <section className='col-md-3 menu'>
              <ul>
                <li className='top'>Freelancers</li>
                <li>Freelancers in India</li>
                <li>Freelancers in USA</li>
                <li>Freelancers in UK</li>
                <li>Freelancers in Philippines</li>
                <li>Freelancers in Pakistan</li>
                <li>Freelancers in Bangladesh</li>
              </ul>
            </section>
          </div>

          <div className='row lowerRow'>
            <section className='col-md-2 menu'>
              <ul>
                <li className='top'>Freelance Jobs</li>
                <li>Freelance Writing Jobs</li>
                <li>Graphic Design Jobs</li>
                <li>Data Entry Jobs</li>
                <li>Data Entry Jobs</li>
                <li>Virtual Assistant Jobs</li>
                <li>Customer Service Jobs</li>
              </ul>
            </section>

            <section className='col-md-2 menu'>
              <ul>
                <li className='top'>Online Jobs</li>
                <li>Work from Home Jobs</li>
                <li>Part Time Jobs</li>
                <li>Interior Design Jobs</li>
                <li>Voice Over Jobs</li>
                <li>Translator Jobs</li>
                <li>Accounting Jobs</li>
              </ul>
            </section>

            <section className='col-md-2 menu'>
              <ul>
                <li className='top'>Freelancers</li>
                <li>Logo Designers</li>
                <li>Web Designer</li>
                <li>Web Developer</li>
                <li>SEO Consultant</li>
                <li>Android Developer</li>
                <li>IOS Developer</li>
              </ul>
            </section>

            <section className='col-md-2 menu'>
              <ul>
                <li className='top'>Developers</li>
                <li>Front End Developer</li>
                <li>Backend Developer</li>
                <li>PHP Developer</li>
                <li>Wordpress Developer</li>
                <li>Java Developer</li>
                <li>API Developer</li>
              </ul>
            </section>
            
            <section className='col-md-3 menu'>
              <ul>
                <li className='top'>Translation</li>
                <li>English to Spanish Translation</li>
                <li>German to English Translation</li>
                <li>English to Hindi Translation</li>
                <li>English to Tamil Translation</li>
                <li>English to French Translation</li>
                <li>Spanish to English Translation</li>
                <li>German to English Translation</li>
              </ul>
            </section>
          </div>

          <div className='socialLinks'>
            <ul>
              <li className='logo'><img src='https://static.truelancer.com/truelancer-logo1.png'></img>Truelancer</li>
              <li>
                <img className='playStore' src="https://img.icons8.com/dusk/64/000000/google-play.png"/>
                <img className='appStore' src="https://img.icons8.com/nolan/64/apple-app-store.png"/>
              </li>
              <li>
                <img src="https://img.icons8.com/material-outlined/48/ffffff/facebook-new.png"/>
                <img src="https://img.icons8.com/ios/50/ffffff/twitter.png"/>
                <img src="https://img.icons8.com/material-outlined/48/ffffff/linkedin.png"/>
              </li>
            </ul>
          </div>
        </footer>

        <div className='crText col-md-12'>
            <p>Copyright &copy; 2020 | Truelancer.com</p>
        </div>
      </div>

    <style jsx>{`
      .footerContainer {
        background-color: #191919;
        max-width: 100%;
        padding-top: 20px;
      }

      .container .row footer {
        margin: 0 auto;
      }

      .container .row footer .upperRow .menu ul,
      .container .row footer .lowerRow .menu ul {
        list-style: none;
        color: #aaa;
      }

      .container .row footer .upperRow .menu ul li,
      .container .row footer .lowerRow .menu ul li {
        margin-top: 10px;
        cursor: pointer; 
        font-size: 14px;
      }

      .container .row footer .upperRow .menu ul li:hover,
      .container .row footer .lowerRow .menu ul li:hover {
        color: #50b2dc;
      }
      
      .container .row footer .upperRow .menu ul .top,
      .container .row footer .lowerRow .menu ul .top {
        color: #fff;
        margin-bottom: 20px;
        font-weight: 700;
        font-size: 20px;
        border-bottom: 3px solid #fff;
        border-bottom-color: #50b2dc;
      }

      .footerContainer .row footer .socialLinks ul {
        display: flex;
        list-style: none;
        justify-content: space-between;
      }

      .footerContainer .row footer .socialLinks ul li {
        cursor: pointer;
      }

      .footerContainer .row footer .socialLinks ul .logo {
        color: #fff;
        font-size: 35px;
      }

      .footerContainer .row footer .socialLinks ul .logo img {
        margin-right: 10px;
      }

      .footerContainer .row footer .socialLinks ul .playStore {
        margin-right: 10px;
      }

      .footerContainer .row footer .socialLinks ul li img {
        margin-right: 10px;
      }

      .crText {
        text-align: center;
        padding-top: 10px;
        background-color: #fff;
        max-width: 100%; 
      }

      @media only screen and (max-width: 480px) {

        .footerContainer .row footer .socialLinks ul {
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .footerContainer .row footer .socialLinks ul li {
          margin-top: 10px;
        }
      }
    `}</style>
    </div>
  )
}

export default Footer;