/**
 * Title Component for uxcore
 * @author eternalsky
 *
 * Copyright 2015-2017, Uxcore Team, Alinw.
 * All rights reserved.
 */

import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Title extends Component {
  static displayName = 'Title';

  static propTypes = {
    children: PropTypes.any,
    prefixCls: PropTypes.string,
    type: PropTypes.oneOf(['primary', 'secondary', 'thirdary']),
  };

  static defaultProps = {
    prefixCls: 'kuma-title',
    type: 'primary',
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { prefixCls, children, type } = this.props;
    return (
      <div
        className={classnames(prefixCls, {
          [`${prefixCls}-${type}`]: true,
        })}
      >
        {children}
      </div>
    );
  }
}
