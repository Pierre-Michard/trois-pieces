/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import photoPierre from './pierre_michard.jpg';

class Header extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Navigation className={s.nav} />
          <Link className={s.brand} to="/">
            <img src={photoPierre} className={s.photo} alt="Pierre" />
            <span className={s.brandTxt}></span>
          </Link>
          <div className={s.banner}>
            <h1 className={s.bannerTitle}>Trois pièces</h1>
            <p className={s.bannerDesc}>Bientôt chez vous</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
