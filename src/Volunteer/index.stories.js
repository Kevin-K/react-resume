import React from 'react';
import Volunteer from './index.js';
import Content from '../Content';

export default {
  title: 'Volunteer',
  component: Volunteer,
};

const volunteer_data = [
  {
    "organization": "Animal Shelter",
    "position": "Web Developer",
    "startDate": "2016-09-01",
    "highlights": [
      "Maintain website for animal adoptions."
    ]
  },
  {
    "organization": "Local Bootcamp",
    "position": "Tutor",
    "startDate": "2015-09-01",
    "endDate": "2015-10-01",
    "highlights": [
      "Helped students with questions regarding ReactJs.",
      "Provided code reviews for student assignments."
    ]
  }
];

export const BasicUsage = () => <Volunteer {...volunteer_data[0]} />;

BasicUsage.story = {
  name: 'Basic Usage',
};

export const InContent = () => (<Content title="Volunteer">
  {volunteer_data.map(data => <Volunteer {...data} />)}
</Content>);

InContent.story = {
  name: 'In Content',
};
