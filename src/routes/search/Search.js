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
import { connect } from 'react-redux';
import { updateSearch, saveSearch, getSearch } from '../../actions/search';

class Search extends React.Component {
  static propTypes = {
    localisation: PropTypes.string,
    min_price: PropTypes.number,
    max_price: PropTypes.number,
    min_rooms: PropTypes.number,
    max_rooms: PropTypes.number,
    min_surface: PropTypes.number,
    max_surface: PropTypes.number,
  };

  componentDidMount() {
    this.props.getSearch();
  }

  handleChange(e) {
    let value = e.target.value;
    if (e.target.type == 'number'){
      value = parseInt(value);
    }

    this.props.updateSearch({ [e.target.name]: value });
  }

  handleSubmit() {
    this.props.saveSearch();
  }

  render() {
    return (
      <div className={s.root}>
        <h1>Ma recherche</h1>
        <form className="ui form">
          <h4 className="ui dividing header">Localisation</h4>
          <div className="field">
            <input
              type="text"
              name="localisation"
              placeholder="Localisation"
              value={this.props.localisation}
              onChange={(e)=>this.handleChange(e)}
            />
          </div>
          <h4 className="ui dividing header">Prix</h4>
          <div className="two fields">
            <div className="field">
              <input
                type="number"
                name="min_price"
                placeholder="Min"
                step="10000"
                value={this.props.min_price}
                onChange={(e)=>this.handleChange(e)}
              />
            </div>
            <div className="field">
              <input
                type="number"
                name="max_price"
                placeholder="Max"
                step="10000"
                value={this.props.max_price}
                onChange={(e)=>this.handleChange(e)}
              />
            </div>
          </div>
          <h4 className="ui dividing header">Superficie</h4>
          <div className="two fields">
            <div className="field">
              <input
                type="number"
                name="min_surface"
                placeholder="Min"
                step="5"
                value={this.props.min_surface}
                onChange={(e)=>this.handleChange(e)}
              />
            </div>
            <div className="field">
              <input
                type="number"
                name="max_surface"
                placeholder="Max"
                step="5"
                value={this.props.max_surface}
                onChange={(e)=>this.handleChange(e)}
              />
            </div>
          </div>
          <h4 className="ui dividing header">Nombre de pièces</h4>
          <div className="two fields">
            <div className="field">
              <input
                type="number"
                name="min_rooms"
                placeholder="Min"
                value={this.props.min_rooms}
                onChange={(e)=>this.handleChange(e)}
              />
            </div>
            <div className="field">
              <input
                type="number"
                name="max_rooms"
                placeholder="Max"
                value={this.props.max_rooms}
                onChange={(e)=>this.handleChange(e)}
              />
            </div>
          </div>
          <div className="ui button"
               tabIndex="0"
               onClick={(e)=> this.handleSubmit()}>
            Sauvegarder
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.search);
  return {
    ...state.search
  }
};

export default connect(mapStateToProps, {updateSearch, saveSearch, getSearch})(withStyles(s)(Search));
