import React from 'react';
import Navbar from '../Navbar/NavbarComponent';
import Footer from '../Footer/FooterComponent';
import './App.scss';

export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.object.isRequired,
    viewer: React.PropTypes.object.isRequired
  };

  render() {
    return (
      <div className='app'>
        <Navbar />
        <div className='greeting'>
          <h1>Wordpress Experiment</h1>
          <p>Working out how to build a JS site that is built with Relay, React, GraphQL and connects to a Wordpress site and its REST API...</p>
        </div>
        <div className='content'>
          {this.props.children}
        </div>
        <Footer username={this.props.viewer.username} website={this.props.viewer.website} />
      </div>
    );
  }
}
