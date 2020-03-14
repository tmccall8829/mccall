import React from 'react';
import './footer.css';
import { Link } from "gatsby"
import { FaTwitter, FaMediumM } from 'react-icons/fa';
import { rhythm } from "../../utils/typography"

const Footer  = () => {
   return (
     <div style={{marginBottom: rhythm(0),marginTop: 0}}>
      <footer>
         &copy; {new Date().getFullYear()} <Link to="/about">Thomas McCall.</Link>
         &nbsp;&nbsp;
         <a href='https://twitter.com/fakeTomMcCall'>
           <FaTwitter />
         </a>
         &nbsp;&nbsp;
         <a href='https://medium.com/@thomas.e.mccall'>
          <FaMediumM />
         </a>
         &nbsp;&nbsp;
         <br></br>
         <a href="https://github.com/tmccall8829/mccall">
            View source code.
         </a>
      </footer>
     </div>
   )
}

export default Footer;
