import React from 'react';
import { Link } from 'react-router';
import { Layout, Header, Navigation, Drawer } from 'react-mdl';
import './Navbar.scss';

export default class Navbar extends React.Component {
  render() {
    const title = 'nicklewis.tech';
    return (
      <Layout>
        <Header title={<Link to='/'>{title}</Link>} scroll>
          <Navigation>
            <Link to='/signup'>Sign up</Link>
            <Link to='/login'>Login</Link>
          </Navigation>
        </Header>
        <Drawer title={<Link to='/' style={{ fontSize: '1.5em' }}>{title}</Link>} className='mdl-layout--small-screen-only'>
          <Navigation>
            <Link to='/signup'>Sign up</Link>
            <Link to='/login'>Login</Link>
          </Navigation>
        </Drawer>
      </Layout>
    );
  }
}
