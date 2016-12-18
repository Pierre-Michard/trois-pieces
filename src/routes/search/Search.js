/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../home/Home.css';

class Search extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <form className="ui form">
          <h4 className="ui dividing header">Localisation</h4>
          <div className="field">
            <input type="text" name="localisation" placeholder="Localisation"/>
          </div>
          <h4 className="ui dividing header">Prix</h4>
          <div className="two fields">
            <div className="field">
              <input type="text" name="min_price" placeholder="Min"/>
            </div>
            <div className="field">
              <input type="text" name="max_price" placeholder="Max"/>
            </div>
          </div>
          <h4 className="ui dividing header">Superficie</h4>
          <div className="two fields">
            <div className="field">
              <input type="text" name="min_surface" placeholder="Min"/>
            </div>
            <div className="field">
              <input type="text" name="max_surface" placeholder="Max"/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withStyles(s)(Search);
