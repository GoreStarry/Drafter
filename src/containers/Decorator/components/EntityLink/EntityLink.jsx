import React from 'react';

export default function EntityLink(props) {
  const {url} = props.contentState.getEntity(props.entityKey).getData();
  return (
    <a href={ url }>
      { props.children }
    </a>
  )
}
