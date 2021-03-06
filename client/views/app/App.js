import React from 'react'
import T from 'prop-types'
import classnames from 'classnames/bind'

import PositionContext from '../../lib/react-position/PositionContext'

// Using CSS Modules so we assign the styles to a variable
import s from './App.styl'

const cx = classnames.bind(s)

/**
 * NOTE: As of 2015-11-09 react-transform does not support a functional
 * component as the base compoenent that's passed to ReactDOM.render, so we
 * still use a class component here.
 */
// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component {
  static propTypes = {
    children: T.node,
  }

  static defaultProps = {
    children: undefined,
  }

  render() {
    return (
      <PositionContext>
        <div className={cx('App')}>
          {this.props.children}
        </div>
      </PositionContext>
    )
  }
}
