import React from 'react';
import Skills from './index.js';
import Content from '../Content';

export default {
  title: 'Skills',
  component: Skills,
};

const skills_data = [
  {
    "name": "Web Frameworks",
    "level": "Expert",
    "keywords": [
      "React",
      "Ruby on Rails",
    ]
  },
  {
    "name": "Web Frameworks",
    "level": "Novice",
    "keywords": [
      "Angular"
    ]
  }
];

export const BasicUsage = () => <Skills {...skills_data[0]} />;

BasicUsage.story = {
  name: 'Basic Usage',
};

export const InContent = () => (<Content title="Skills">
  {skills_data.map(data => <Skills {...data} />)}
</Content>);

InContent.story = {
  name: 'In Content',
};
