'use strict';

import React from 'react';
import {ReactMeteorData} from 'meteor/react-meteor-data';
import {Mapbox} from 'meteor/pauloborges:mapbox';

export const Loader = React.createClass({
  mixins: [ReactMeteorData],

  propTypes: {
    accessToken: React.PropTypes.string.isRequired,
    gl: React.PropTypes.bool,
    plugins: React.PropTypes.array,
    children: React.PropTypes.node.isRequired
  },

  getDefaultProps() {
    return {
      gl: false,
      plugins: []
    }
  },

  getMeteorData() {
    return {
      loaded: Mapbox.loaded()
    }
  },

  componentWillMount() {
    Mapbox.load({
      gl: this.props.gl,
      plugins: this.props.plugins
    });
  },

  render() {
    const {gl, accessToken, children} = this.props;
    const {loaded} = this.data;

    if (loaded) {
      if (gl) {
        mapboxgl.accessToken = accessToken;
      } else {
        L.mapbox.accessToken = this.props.accessToken;
      }

      return children;
    } else {
      return null;
    }
  }
});