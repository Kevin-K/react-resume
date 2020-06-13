import React from "react";
import PropTypes from "prop-types";
import Work from "../Work";
/**
 * Resume entry for volunteer experience.
 */
const Volunteer = ({ organization, ...other }) => {
  return <Work name={organization} {...other} description={undefined} />;
};

Volunteer.propTypes = {
  /** Name of the organization. */
  organization: PropTypes.string,
  /** Title/Role. */
  position: PropTypes.string.isRequired,
  /** Start date of volunteering. Format: YYYY-MM-DD. */
  startDate: PropTypes.string.isRequired,
  /** End date of volunteering. "Present" is used if not provided. Format: YYYY-MM-DD. */
  endDate: PropTypes.string.isRequired,
  /** Website for organization. */
  url: PropTypes.string,
};

Volunteer.defaultProps = {
  organization: "",
  url: "",
};

export default Volunteer;
