import React from 'react';

import '../../../style/Footer.css'


const Footer = () => {
  const year = new Date().getFullYear()


  return(
    <div className="footer">
      <div className="inner-footer">
        <div className="copy">
          <p>© {year} Dejo.dev</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;