import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { EditorState, getDefaultKeyBinding, KeyBindingUtil, genKey, ContentBlock, DefaultDraftBlockRenderMap, RichUtils } from 'draft-js';
import { List } from 'immutable';

import styles from './KeyBinding.css'

import StyledEditor from '../../components/StyledEditor';
import DraftConsolePanel from '../../components/DraftConsolePanel';
import { BlockRenderMap, myBlockStyleFn } from '../BlockStyling/BlockRenderMap.js';
const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(BlockRenderMap);


const {hasCommandModifier} = KeyBindingUtil;

function keyBindingMap(e) {
  const hasCommand = hasCommandModifier(e);
  switch (e.keyCode) {
    case ( hasCommand && 69): // E
      return 'block-styling';
    case ( hasCommand && 13): // enter
      return 'new-block';

    default:
      return getDefaultKeyBinding(e);
  }

}


class KeyBinding extends PureComponent {
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

  _handleKeyCommand = (command) => {

    switch (command) {
      case 'block-styling':
        return this._blockStyling()

      case 'new-block':
        return this._newBlock();

      default:
        return 'not-handled'
    }

  };

  _blockStyling = () => {
    const {editorState} = this.state;

    const myEditorState = RichUtils.toggleBlockType(editorState, "BlockWrapperCard")

    this.setState({
      editorState: myEditorState
    });
  }

  _newBlock = () => {
    // fork by Shingo Sato's draft-js-block-breakout-plugin https://github.com/icelab/draft-js-block-breakout-plugin/issues

    const {editorState} = this.state;
    const selection = editorState.getSelection()
    if (selection.isCollapsed()) {
      const contentState = editorState.getCurrentContent()
      const currentBlock = contentState.getBlockForKey(selection.getEndKey())
      const emptyBlockKey = genKey()

      const emptyBlock = new ContentBlock({
        key: emptyBlockKey,
        text: '',
        type: 'unstyled',
        characterList: List(),
        depth: 0,
      })

      const blockMap = contentState.getBlockMap()
      const blocksBefore = blockMap.toSeq().takeUntil(function(v) {
        return v === currentBlock
      })
      const blocksAfter = blockMap.toSeq().skipUntil(function(v) {
        return v === currentBlock
      }).rest()
      let augmentedBlocks
      let focusKey
      // Choose which order to apply the augmented blocks in depending
      // on whether we’re at the start or the end
      augmentedBlocks = [
        [currentBlock.getKey(), currentBlock],
        [emptyBlockKey, emptyBlock],
      ]
      focusKey = emptyBlockKey;
      // Join back together with the current + new block
      const newBlocks = blocksBefore.concat(augmentedBlocks, blocksAfter).toOrderedMap()
      const newContentState = contentState.merge({
        blockMap: newBlocks,
        selectionBefore: selection,
        selectionAfter: selection.merge({
          anchorKey: focusKey,
          anchorOffset: 0,
          focusKey: focusKey,
          focusOffset: 0,
          isBackward: false
        })
      })
      // Set the state
      this.setState({
        editorState: EditorState.push(editorState, newContentState, 'split-block')
      })
      return 'handled'
    }
    return 'not-handled'
  }


  render() {
    let {editorState} = this.state;
    return (
      <div className="KeyBinding">
        <StyledEditor
          editorState={ editorState }
          onChange={ this._onChangeEditor }
          keyBindingFn={ keyBindingMap }
          handleKeyCommand={ this._handleKeyCommand }
          blockStyleFn={ myBlockStyleFn }
          blockRenderMap={ extendedBlockRenderMap } />
        <DraftConsolePanel editorState={ editorState } />
      </div>
      );
  }
}

KeyBinding.propTypes = {}

KeyBinding.defaultProps = {}

export default KeyBinding
