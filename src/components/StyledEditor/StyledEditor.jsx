import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Editor } from 'draft-js';
import styles from './StyledEditor.css'

class StyledEditor extends PureComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector('.DraftEditor-root').addEventListener("click", () => {
            this.refEditor.focus();
        }, false)
    }

    render() {
        return (
            <div className='StyledEditor'>
              <Editor
                onClick={ this._clickEditor }
                ref={ editor => this.refEditor = editor }
                {...this.props} />
            </div>
            );
    }
}

StyledEditor.propTypes = {
    editorState: PropTypes.object.isRequired,
    onChange: PropTypes.func,
}

StyledEditor.defaultProps = {}

export default StyledEditor
