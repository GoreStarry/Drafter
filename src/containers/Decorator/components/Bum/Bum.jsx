import React, { PureComponent, PropTypes } from 'react';
import styles from './Bum.css';


class Bum extends PureComponent {
  render() {
    return (
      <span className="Bum">{ this.props.children }</span>
      );
  }
}

Bum.propTypes = {

};

export default Bum;
