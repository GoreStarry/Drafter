import React, { PureComponent, PropTypes } from 'react';

class Wimmie extends PureComponent {
  render() {
    return (
      <span><img src={ require('./images/Wimmie.jpg') }/> <span style={ { display: "none" } }>{ this.props.children }</span></span>
      );
  }
}

Wimmie.propTypes = {

};

export default Wimmie;
