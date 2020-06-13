import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Heading, Content, Volunteer, Skills, Education, Work } from './index.js';

export default {
    title: 'Full Resume Example',
};

const resume_data = {
    "basics": {
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
    },
    "work": [
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
    ],
    "volunteer": [
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
    ],
    "education": [
        {
            "institution": "State Tech",
            "area": "Computer Engineering",
            "studyType": "Bachelor of Science",
            "startDate": "2009-08-01",
            "endDate": "2013-05-01",
            "gpa": "3.49",
            "courses": []
        }
    ],
    "awards": [],
    "publications": [],
    "skills": [
        {
            "name": "Web Frameworks",
            "level": "Expert",
            "keywords": [
                "React",
                "Ruby on Rails",
            ]
        },
        {
            "name": "Deployment",
            "level": "",
            "keywords": [
                "Docker",
                "Amazon Web Services"
            ]
        },
        {
            "name": "Tooling",
            "level": "",
            "keywords": [
                "Git",
                "Linux",
                "NPM",
                "Webpack"
            ]
        }
    ]
}

export const BasicUsage = () => (<>
    <Heading {...resume_data.basics} />
    <Content title="SUMMARY">
        <span> {resume_data.basics.summary}</span>
    </Content>
    <Content title="EXPERIENCE">
        {resume_data.work.map((entry, index) => (<Work {...entry} key={index} />))}
    </Content>
    <Content title="VOLUNTEER">
        {resume_data.volunteer.map((entry, index) => (<Volunteer {...entry} key={index} />))}
    </Content>
    <Content title="EDUCATION">
        {resume_data.education.map((entry, index) => (<Education {...entry} key={index} />))}
    </Content>
    <Content title="SKILLS">
        {resume_data.skills.map((entry, index) => (<Skills {...entry} key={index} />))}
    </Content>
</>);

BasicUsage.story = {
    name: 'Basic Usage',
};

const useStyles = makeStyles({
    root: {
        textAlign: 'left',
        '& > :not(:first-child)': {
            paddingTop: '8px'
        },
        '& > :not(:last-child)': {
            borderBottom: 'solid 1px #CFCFCF',
            paddingBottom: '8px'
        }
    },
});

export const StyledExample = () => {
    const classes = useStyles();
    return (<div className={classes.root}>
        <BasicUsage />
    </div>);
}

StyledExample.story = {
    name: 'Styled Example',
};
