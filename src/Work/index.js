import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { row, column, compactList } from "../styles";
import { yearMonthDayDate, monthYearString } from "../timespan";

const useStyles = makeStyles((theme) => ({
  row: row(theme),
  compactList: compactList(theme),
  title: {
    ...column(theme),
    flex: 2,
  },
  timespan: {
    ...column(theme),
    alignItems: "flex-end",
  },
}));

/**
 * Resume entry for work experience.
 */
const Work = ({
  name,
  description,
  url,
  position,
  startDate,
  endDate,
  highlights = [],
}) => {
  const classes = useStyles();
  const sDate = yearMonthDayDate(startDate);
  const eDate = yearMonthDayDate(endDate);

  // startDate is required
  const startString = monthYearString(sDate);

  // endDate is not (could be presently employed)
  const endString = eDate ? monthYearString(eDate) : "Present";

  return (
    <div>
      {/* Work heading */}
      <Typography variant="subtitle1" className={classes.row}>
        <div className={classes.title}>
          <span>
            <b>{url ? <a href={url}>{name}</a> : name}</b>, {position}
          </span>
        </div>
        <div className={classes.timespan}>
          {startString} to {endString}
        </div>
      </Typography>

      {/* Work description */}
      <Typography variant="body2" className={classes.row}>
        {description}
      </Typography>

      {/* Work highlights */}
      {highlights.length ? (
        <ul className={classes.compactList}>
          {highlights.map((entry) => (
            <li key={entry}>{entry}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

Work.propTypes = {
  /** Company name. */
  name: PropTypes.string.isRequired,
  /** Job Title/Role. */
  position: PropTypes.string.isRequired,
  /** Start date of volunteering. Format: YYYY-MM-DD. */
  startDate: PropTypes.string.isRequired,
  /** End date of volunteering. "Present" is used if not provided. Format: YYYY-MM-DD. */
  endDate: PropTypes.string,
  /** Website for company. */
  url: PropTypes.string,
};

Work.defaultProps = {
  url: "",
  endDate: "",
};
export default Work;
