import React from 'react';
import { linkTo } from '@storybook/addon-links';
import Content from '../Content';
import Education from './index.js';
export default {
  title: 'Education',
  component: Education,
};

const education_data = [
  {
    "institution": "State Tech",
    "area": "Computer Engineering",
    "studyType": "Bachelor of Science",
    "startDate": "2009-08-01",
    "endDate": "2013-05-01",
    "gpa": "3.4",
    "courses": []
  },
  {
    "institution": "University of State",
    "area": "Computer Science",
    "studyType": "Masters",
    "startDate": "2017-01-01",
    "endDate": "2018-12-01",
    "gpa": "3.5",
    "courses": ["Large Scale Software Design", "Linux Kernel Drivers"]
  }
]
export const BasicUsage = () => <Education {...education_data[0]} />;

BasicUsage.story = {
  name: 'Basic Usage',
};

export const InContent = () => (<Content title="Education">
  {education_data.map(data => <Education {...data} />)}
</Content>);

InContent.story = {
  name: 'In Content',
};
