import React from 'react';
import Immutable from 'immutable';

import BlockWrapperCard from './components/BlockWrapperCard.jsx';

export const BlockRenderMap = Immutable.Map({
  'BlockWrapperCard': {
    element: 'h1',
    wrapper: <BlockWrapperCard />
  },
})


export function myBlockStyleFn(contentBlock) {
  const type = contentBlock.getType();
  switch (type) {
    case 'BlockWrapperCard':
      return 'card__container'
  }
}
