import React from 'react'
import { storiesOf } from '@storybook/react'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import DraftConsolePanel from './DraftConsolePanel'

import { EditorState } from 'draft-js';

const initEditorState = EditorState.createEmpty()

storiesOf('DraftConsolePanel', module).add('Example 1', () => <DraftConsolePanel editorState={ initEditorState } />)
