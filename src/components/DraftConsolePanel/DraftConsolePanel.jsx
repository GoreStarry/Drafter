import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { convertToRaw } from 'draft-js';
import { toJS } from 'immutable'

import './DraftConsolePanel.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButtonOrigin from 'material-ui/RaisedButton';

const RaisedButton = (props) => <RaisedButtonOrigin {...props} style={ { margin: "5px" } } />

class DraftConsolePanel extends PureComponent {
    constructor(props) {
        super(props)
    }

    clEditorState = () => {
        console.log(this.props.editorState);
    }

    clEditorStateToJS = () => {
        console.log(this.props.editorState.toJS());
    }

    clContentState = () => {
        console.log(this.props.editorState.getCurrentContent().toJS());
    }

    clRawContentState = () => {
        console.log(convertToRaw(this.props.editorState.getCurrentContent()));
    }

    clBlockTree = () => {
        console.log(this.props.editorState.getBlockTree());
    }

    clClear = () => {
        console.clear();
    }

    clBlockKey = () => {
        const {editorState} = this.props;
        const currentSelection = editorState.getSelection();
        const startKey = currentSelection.getStartKey()
        console.log(startKey);
        return startKey;
    }

    clCurrentInlineStyle = (e) => {
        e.preventDefault();
        const {editorState} = this.props;
        console.log(editorState.getCurrentInlineStyle());
    }

    clEntityMap = () => {
        const getCurrentContent = this.props.editorState.getCurrentContent();
        try {
            const lastEntityKey = getCurrentContent.getLastCreatedEntityKey();
            const lastEntity = getCurrentContent.getEntity(lastEntityKey);
            console.log(lastEntity);
        } catch (error) {
            console.log(error);
        }
    }

    render() {


        return (
            <MuiThemeProvider>
              <div className="DraftConsolePanel">
                <label htmlFor=''>
                  EditorState:
                </label>
                <RaisedButton label="Immutable" onClick={ this.clEditorState } />
                <RaisedButton label="TO JS" onClick={ this.clEditorStateToJS } />
                <label htmlFor=''>
                  CurrentContent:
                </label>
                <RaisedButton label="TO JS" onClick={ this.clContentState } />
                <RaisedButton label="convert To Raw" onClick={ this.clRawContentState } />
                <label htmlFor=''>
                  Block:
                </label>
                <RaisedButton label="Block Tree" onClick={ this.clBlockTree } />
                <RaisedButton label="Block Key" onClick={ this.clBlockKey } />
                <label htmlFor=''>
                  Inline Style:
                </label>
                <RaisedButton label="Current Inline Style" onClick={ this.clCurrentInlineStyle } />
                <label htmlFor=''>
                  Entity:
                </label>
                <RaisedButton label="Entity Map" onClick={ this.clEntityMap } />
              </div>
            </MuiThemeProvider>
            );
    }
}

DraftConsolePanel.propTypes = {
    editorState: PropTypes.object.isRequired,
}

DraftConsolePanel.defaultProps = {}

export default DraftConsolePanel
