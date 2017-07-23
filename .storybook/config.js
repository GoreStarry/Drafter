import { configure } from '@storybook/react';

function loadStories() {
  require('../src/containers/InlineStyle/InlineStyle.stories.jsx');
  require('../src/containers/BlockStyling/BlockStyling.stories.jsx');
  require('../src/containers/Decorator/Decorator.stories.jsx');
  require('../src/containers/KeyBinding/KeyBinding.stories.jsx');
  require('../src/containers/DraftTestPlayground/DraftTestPlayground.stories.jsx');
  require('../src/components/DraftConsolePanel/DraftConsolePanel.stories.jsx')
}

configure(loadStories, module);
