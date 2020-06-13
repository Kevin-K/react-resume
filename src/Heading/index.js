import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {},
  primary: {},
  secondary: {
    "& > *": {
      display: "inline-block",
    },
    "& > :not(:last-child)": {
      paddingRight: theme.spacing(),
    },
    "@media print": {
      "& > a": {
        color: "black",
        textDecoration: "none",
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
    {address} {city} {region}, {postalCode} {countryCode}{" "}
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
  address: "1 Main St",
  city: "New York",
  region: "NY",
  postalCode: "01234",
  countryCode: "USA",
};

/**
 * The Header of the resume, describes the resume owner.
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
  /** Full name. */
  name: PropTypes.string,
  /** Job Title. */
  title: PropTypes.string,
  /** Telephone number. ex: 555-555-5555 */
  phone: PropTypes.string,
  /** Email address. ex: user@example.com */
  email: PropTypes.string,
  /** Locale data. For US locations, region demarks state. */
  location: PropTypes.shape({
    address: PropTypes.string,
    city: PropTypes.string,
    region: PropTypes.string,
    postalCode: PropTypes.string,
    countryCode: PropTypes.string,
  }),
  /** Do not display contact info. */
  disableContact: PropTypes.bool,
};

Heading.defaultProps = {
  name: "",
  title: "",
  phone: "",
  email: "",
  disableContact: false,
  location: Location.defaultProps,
};
export default Heading;
