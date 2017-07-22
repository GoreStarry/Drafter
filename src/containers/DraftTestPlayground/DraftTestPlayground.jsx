import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles/DraftTestPlayground.css'

class DraftTestPlayground extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="DraftTestPlayground">
              <h1>Draft</h1>
            </div>
            );
    }
}

DraftTestPlayground.propTypes = {}

DraftTestPlayground.defaultProps = {}

export default DraftTestPlayground
