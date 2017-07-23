import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from './InlineStyle.css'
import { EditorState, RichUtils } from 'draft-js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import isSelection from '../../helpers/isSelection.js';

import StyledEditor from '../../components/StyledEditor';
import DraftConsolePanel from '../../components/DraftConsolePanel';

const styleMap = {
    HEIGH_LIGHT: {
        backgroundColor: '#ffeb3b'
    },
    FONT_ITALIC: {
        color: 'green',
        fontWeight: 'bold'
    }
}

class InlineStyle extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            editorState: EditorState.createEmpty()
        }
    }

    _onChangeEditor = (editorState) => {
        this.setState({
            editorState
        });
    }

    _selectionHeighLight = (e) => {
        e.preventDefault();

        let {editorState} = this.state;

        if (!isSelection(editorState)) {
            return;
        }

        editorState = RichUtils.toggleInlineStyle(editorState, 'HEIGH_LIGHT')

        this.setState({
            editorState
        })
    }

    _selectionGreenBold = (e) => {
        e.preventDefault();

        let {editorState} = this.state;

        if (!isSelection(editorState)) {
            return;
        }

        editorState = RichUtils.toggleInlineStyle(editorState, 'FONT_ITALIC')

        this.setState({
            editorState
        })
    }



    render() {
        let {editorState} = this.state;
        return (
            <div className="InlineStyle">
              <StyledEditor
                editorState={ editorState }
                onChange={ this._onChangeEditor }
                customStyleMap={ styleMap } />
              <MuiThemeProvider>
                <div>
                  <RaisedButton
                    label="Heighlight"
                    primary={ true }
                    onClick={ this._selectionHeighLight }
                    style={ { margin: "10px 5px" } } />
                  <RaisedButton
                    label="Green & Bold"
                    primary={ true }
                    onClick={ this._selectionGreenBold }
                    style={ { margin: "10px 5px" } } />
                </div>
              </MuiThemeProvider>
              <DraftConsolePanel editorState={ editorState } />
            </div>
            );
    }
}

InlineStyle.propTypes = {}

InlineStyle.defaultProps = {}

export default InlineStyle
