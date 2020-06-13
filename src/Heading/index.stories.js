import React from 'react';
import Heading from './index.js';

export default {
  title: 'Heading',
  component: Heading,
};

const heading_data = {
  "name": "John Smith",
  "title": "Software Engineer",
  "email": "john@example.com",
  "phone": "555-555-5555",
  "website": "www.google.com",
  "summary": "John Smith is a lorel ipsum dolor sit amet, consectetur adipiscing elit..",
  "location": {
    "address": "5 Main Street",
    "postalCode": "90210",
    "city": "Beverly Hills",
    "countryCode": "USA",
    "region": "California"
  }
};

export const BasicUsage = () => <Heading {...heading_data} />;

BasicUsage.story = {
  name: 'Basic Usage',
};


export const ContactDisabled = () => <Heading disableContact {...heading_data} />;

ContactDisabled.story = {
  name: 'Without Contact',
};
