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
import s from './Home.css';

Date.prototype.yyyymmdd = function() {
  var mm = this.getMonth() + 1; // getMonth() is zero-based
  var dd = this.getDate();

  return [this.getFullYear(),
    (mm>9 ? '' : '0') + mm,
    (dd>9 ? '' : '0') + dd
  ].join('/');
};

class Home extends React.Component {
  static propTypes = {
    adverts: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string.isRequired,
      picture: PropTypes.string,
      price: PropTypes.number.isRequired,
      publicationDate: PropTypes.string,
    })).isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1 className={s.title}>Annonces</h1>
          <div className="ui link cards">
            {this.props.adverts.map((item, index) => (
              <div key={index} className="card">
                <div className="image">
                  <img className={s.maxed} src={item.picture || "/image/default.png"}/>
                </div>
                <div className="content">
                  <a href={item.url} className="header">{item.title}</a>
                  <div className="description">
                    <span>{item.price}</span>
                    <i className="euro icon"/>
                  </div>
                </div>
                <div className="extra content">
                  <span className="right floated">
                    <i className="disabled calendar icon"/>
                    {(new Date(item.publicationDate)).yyyymmdd()}
                  </span>
                </div>
              </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
