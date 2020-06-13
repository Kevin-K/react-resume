import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {},
  primary: {},
  secondary: {
    '& > *': {
      display: 'inline-block',
    },
    '& > :not(:last-child)': {
      paddingRight: theme.spacing(),
    },
    '@media print': {
      '& > a': {
        color: 'black',
        textDecoration: 'none',
      },
    },
  },
}));

/**
 * Util, string builder for USA formatted addresses from JSONResume
 * schema's basic.location specification.
 */
const Location = ({ address, city, region, postalCode, countryCode }) => (
  <span>
    {address} {city} {region}, {postalCode} {countryCode}{' '}
  </span>
);

Location.propTypes = {
  address: PropTypes.string,
  city: PropTypes.string,
  region: PropTypes.string,
  postalCode: PropTypes.string,
  countryCode: PropTypes.string,
};

Location.defaultProps = {
  address: '1 Main St',
  city: 'New York',
  region: 'NY',
  postalCode: '01234',
  countryCode: 'USA',
};

/**
 * Resume heading block, generated from the JSONResume schema's basic
 * (sub-object) specification.
 */
const Heading = ({ name, title, email, phone, location, disableContact }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h5">
        <div className={classes.primary}>
          <span>
            {name}, {title}
          </span>
        </div>
      </Typography>
      {!disableContact && (
        <Typography variant="subtitle1">
          <div className={classes.secondary}>
            {phone && <a href={`tel:${phone}`}>{phone} </a>}
            {email && <a href={`mailto:${email}?subject=Inquiry`}>{email} </a>}
            {location.address && <Location {...location} />}
          </div>
        </Typography>
      )}
    </div>
  );
};

Heading.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  location: PropTypes.shape(Location.propTypes),
  disableContact: PropTypes.bool,
};

Heading.defaultProps = {
  name: '',
  title: '',
  phone: '',
  email: '',
  disableContact: false,
  location: Location.defaultProps,
};
export default Heading;
