import { configure, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

// stories loader
const req = require.context('../src', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

setAddon(infoAddon);
// initialize react-storybook
configure(loadStories, module);
