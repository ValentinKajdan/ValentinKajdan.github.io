import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

import Home from './Home';
import Contact from './Contact';

class App extends Component {

  render() {

    const Layout = () => (
      <div className={css(styles.layout)}>
        <header>
          <nav className={css(styles.navbar)}>
            <ul className={css(styles.navList)}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
        </main>
      </div>
    )

    return (
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );
  }
}

const styles = StyleSheet.create({
    layout: {
      textAlign: 'center',
    },
    navList: {
      listStyle: 'none',
      display: 'flex',
      justifyContent: 'space-around',
    },
});

export default App;
