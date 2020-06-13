import React from "react";
import PropTypes from "prop-types";
import Work from "../Work";

/**
 * Resume entry for education.
 */
const Education = ({
  institution,
  area,
  studyType,
  gpa,
  courses,
  ...other
}) => {
  return (
    <Work
      name={institution}
      position={`${studyType} - ${area}`}
      description={`GPA: ${gpa}`}
      highlights={courses}
      {...other}
    />
  );
};

Education.propTypes = {
  /** Name of education institution. */
  institution: PropTypes.string,
  /** Type of degree/certificate. */
  studyType: PropTypes.string,
  /** Field of study. */
  area: PropTypes.string,
  /** Grade point averge. */
  gpa: PropTypes.string,
  /** Course names. */
  courses: PropTypes.arrayOf(PropTypes.string),
};

Education.defaultProps = {
  institution: "",
  studyType: "",
  area: "",
  gpa: "",
  courses: [],
};

export default Education;
