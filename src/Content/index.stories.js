import React from 'react';
import { linkTo } from '@storybook/addon-links';
import Content from './index.js';

export default {
  title: 'Content',
  component: Content,
};

export const BasicUsage = () => <Content title="Title">Content goes here</Content>;

BasicUsage.story = {
  name: 'Basic Usage',
};
