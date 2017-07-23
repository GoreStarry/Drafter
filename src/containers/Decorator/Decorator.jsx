import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { EditorState, CompositeDecorator, Modifier } from 'draft-js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import styles from './Decorator.css'

import StyledEditor from '../../components/StyledEditor';
import DraftConsolePanel from '../../components/DraftConsolePanel';

import decorateRegex from './decorators/decorateRegex.js';
import decorateEntity from './decorators/decorateEntity.js';

class Decorator extends PureComponent {
    constructor(props) {
        super(props)
        const compositeDecorator = new CompositeDecorator([...decorateRegex, decorateEntity])
        this.state = {
            editorState: EditorState.createEmpty(compositeDecorator)
        }
    }

    _onChangeEditor = (editorState) => {
        this.setState({
            editorState
        });
    }

    _createEntity = (e) => {
        e.preventDefault();
        const {editorState} = this.state;
        const selection = editorState.getSelection();
        const contentState = editorState.getCurrentContent();


        const contentStateCreateEntity = contentState.createEntity(
            'ENTITY_FOR_DECORATOR',
            'MUTABLE',
            {
                url: 'http://www.f2e.tw/'
            }
        );

        const entityKey = contentStateCreateEntity.getLastCreatedEntityKey();

        const contentStateWithEntity = Modifier.applyEntity(
            contentState,
            selection,
            entityKey
        )

        const newEditorState = EditorState.set(editorState, {
            currentContent: contentStateWithEntity
        });

        this.setState({
            editorState: newEditorState
        })
    }

    render() {
        let {editorState} = this.state;

        return (
            <div className="Decorator">
              <StyledEditor editorState={ editorState } onChange={ this._onChangeEditor } />
              <MuiThemeProvider>
                <div>
                  <RaisedButton
                    label="Create Entity"
                    primary={ true }
                    onClick={ this._createEntity }
                    style={ { margin: "10px 5px" } } />
                </div>
              </MuiThemeProvider>
              <DraftConsolePanel editorState={ editorState } />
            </div>
            );
    }
}

Decorator.propTypes = {}

Decorator.defaultProps = {}

export default Decorator
