import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from './BlockStyling.css'
import { EditorState, DefaultDraftBlockRenderMap, RichUtils } from 'draft-js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import StyledEditor from '../../components/StyledEditor';
import DraftConsolePanel from '../../components/DraftConsolePanel';

import { BlockRenderMap, myBlockStyleFn } from './BlockRenderMap.js';

const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(BlockRenderMap);



class BlockStyling extends PureComponent {
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

    _toggleBlockType = (e) => {
        e.preventDefault();
        const {editorState} = this.state;

        const myEditorState = RichUtils.toggleBlockType(editorState, "BlockWrapperCard")

        this.setState({
            editorState: myEditorState
        });
    }

    render() {
        let {editorState} = this.state;

        return (
            <div className="BlockStyling">
              <StyledEditor
                editorState={ editorState }
                onChange={ this._onChangeEditor }
                blockStyleFn={ myBlockStyleFn }
                blockRenderMap={ extendedBlockRenderMap } />
              <MuiThemeProvider>
                <div>
                  <RaisedButton
                    label="toggle Block Type"
                    primary={ true }
                    onClick={ this._toggleBlockType }
                    style={ { margin: "10px 5px" } } />
                </div>
              </MuiThemeProvider>
              <DraftConsolePanel editorState={ editorState } />
            </div>
            );
    }
}

BlockStyling.propTypes = {}

BlockStyling.defaultProps = {}

export default BlockStyling
