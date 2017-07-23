import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Editor, EditorState, RichUtils, DefaultDraftBlockRenderMap, CompositeDecorator, Modifier, convertToRaw, genKey, ContentBlock } from 'draft-js';

import './styles/DraftTestPlayground.css'

import DraftConsolePanel from '../../components/DraftConsolePanel';

class DraftTestPlayground extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editorState: EditorState.createEmpty()
        }
    }

    render() {
        return (
            <div className="DraftTestPlayground">
              <h1>Draft</h1>
              <DraftConsolePanel editorState={}/>
            </div>
            );
    }
}

DraftTestPlayground.propTypes = {
    EditorState: PropTypes.object.isRequired,
}

DraftTestPlayground.defaultProps = {}

export default DraftTestPlayground
