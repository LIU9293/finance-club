/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add an unconnected component',
  prompts: [{
    type: 'list',
    name: 'type',
    message: 'Select the type of component',
    default: 'Stateless Function',
    choices: () => ['Stateless Function', 'ES6 Class (Pure)', 'ES6 Class', 'Styled Component Wrapper'],
  }, {
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'Button',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return componentExists(value) ? 'A component or container with this name already exists' : true;
      }

      return 'The name is required';
    },
  }],
  actions: (data) => {
    // Generate index.js, index.test.js and index.stories.js
    let componentTemplate;

    switch (data.type) {
      case 'ES6 Class': {
        componentTemplate = './component/es6.js.hbs';
        break;
      }
      case 'ES6 Class (Pure)': {
        componentTemplate = './component/es6.pure.js.hbs';
        break;
      }
      case 'Stateless Function': {
        componentTemplate = './component/stateless.js.hbs';
        break;
      }
      case 'Styled Component Wrapper': {
        componentTemplate = './component/styled.wrapper.js.hbs';
        break;
      }
      default: {
        componentTemplate = './component/es6.js.hbs';
      }
    }

    const actions = [{
      type: 'add',
      path: '../../src/components/{{properCase name}}/index.js',
      templateFile: componentTemplate,
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../src/components/{{properCase name}}/tests/index.test.js',
      templateFile: './component/test.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../src/components/{{properCase name}}/index.stories.js',
      templateFile: './component/story.js.hbs',
      abortOnFail: true,
    }];

    return actions;
  },
};
