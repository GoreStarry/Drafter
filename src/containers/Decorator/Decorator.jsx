import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from './Decorator.css'

class Decorator extends PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="Decorator"></div>
            );
    }
}

Decorator.propTypes = {}

Decorator.defaultProps = {}

export default Decorator
