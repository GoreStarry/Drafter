import React, { PureComponent, PropTypes } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Card, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

class BlockWrapperCard extends PureComponent {
  render() {
    return (
      <MuiThemeProvider muiTheme={ getMuiTheme(darkBaseTheme) }>
        <Card>
          <CardHeader
            title="Gore"
            subtitle="F2E"
            avatar={ require('./images/Gore.jpg') } />
          <CardText>
            { this.props.children }
          </CardText>
        </Card>
      </MuiThemeProvider>
      );
  }
}

BlockWrapperCard.propTypes = {

};

export default BlockWrapperCard;
