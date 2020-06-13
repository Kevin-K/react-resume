import React from 'react';
import Work from './index.js';
import Content from '../Content';

export default {
  title: 'Work',
  component: Work,
};

const work_data = [
  {
    "name": "Company, Inc.",
    "position": "Software Engineer",
    "startDate": "2019-01-01",
    "highlights": [
      "Lead web developer for entertainment system for multiple automotive brands.",
      "Scrum Master for a team of 10."
    ]
  },
  {
    "name": "Company, Inc.",
    "position": "Software Engineering Intern",
    "startDate": "2018-06-01",
    "endDate": "2018-12-31",
    "highlights": [
      "Implemented automation for various device testing for a Progressive Web App.",
      "Collaborated with senior developers on feature development for an internal research project.",
    ]
  },
];

export const BasicUsage = () => <Work {...work_data[0]} />;

BasicUsage.story = {
  name: 'Basic Usage',
};

export const InContent = () => (<Content title="Work">
  {work_data.map(data => <Work {...data} />)}
</Content>);

InContent.story = {
  name: 'In Content',
};
