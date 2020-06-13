import React from "react";
import PropTypes from "prop-types";

/**
 * Resume entry for skills.
 * Presents a skill category, level of knowledge,
 * and keywords pertaining to the skill.
 */
const Skills = ({ name, level, keywords }) => (
  <div>
    <b>
      {name}
      {level ? ` (${level}): ` : `: `}
    </b>
    {keywords.join(", ")}
  </div>
);

Skills.propTypes = {
  /** A skill categoriy */
  name: PropTypes.string,
  /** Level of experience. If not provided no level is shown. */
  level: PropTypes.string,
  /** List of relevant keywords for the skill. */
  keywords: PropTypes.arrayOf(PropTypes.string),
};

Skills.defaultProps = {
  name: "",
  level: "",
  keywords: [],
};
export default Skills;
