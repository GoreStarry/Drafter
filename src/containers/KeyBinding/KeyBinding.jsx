import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from './KeyBinding.css'

import Editor from '../../components/StyledEditor';

class KeyBinding extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="KeyBinding">
        <Editor/>
      </div>
      );
  }
}

KeyBinding.propTypes = {}

KeyBinding.defaultProps = {}

export default KeyBinding
