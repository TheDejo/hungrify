import React, { Component } from 'react';
import Header from '../components/Header_footer/header/header';
import Footer from '../components/Header_footer/footer';

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="page_container">
          {this.props.children}
         </div>
        <Footer />
      </div>
    );
  }
}

export default Layout;