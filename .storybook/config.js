import { configure } from '@storybook/react';

function loadStories() {
  require('../src/components/DraftConsolePanel/DraftConsolePanel.stories.jsx')
  require('../src/containers/DraftTestPlayground/DraftTestPlayground.stories.jsx');
// You can require as many stories as you need.
}

configure(loadStories, module);
