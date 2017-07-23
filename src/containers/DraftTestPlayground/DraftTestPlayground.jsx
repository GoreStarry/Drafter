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

  onChange = (editorState) => {
    this.setState({
      editorState
    });
  };

  render() {
    const {editorState} = this.state;
    return (
      <div className="DraftTestPlayground">
        <h1>Drafter</h1>
        <Editor editorState={ this.state.editorState } onChange={ this.onChange } />
        <DraftConsolePanel editorState={ editorState } />
      </div>
      );
  }
}

DraftTestPlayground.propTypes = {}

DraftTestPlayground.defaultProps = {}

export default DraftTestPlayground
