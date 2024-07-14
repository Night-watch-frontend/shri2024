import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

function Event(props) {
  const ref = useRef();

  const { onSize } = props;

  useEffect(() => {
    const width = ref.current.offsetWidth;
    const height = ref.current.offsetHeight;
    if (onSize) {
      onSize({ width, height });
    }
  });

  return (
    <li ref={ref} className={"event" + (props.slim ? " event_slim" : "")}>
      <button className="event__button">
        <span
          className={`event__icon event__icon_${props.icon}`}
          role="img"
          aria-label={props.iconLabel}></span>
        <h4 className="event__title">{props.title}</h4>
        {props.subtitle && (
          <span className="event__subtitle">{props.subtitle}</span>
        )}
      </button>
    </li>
  );
}

Event.propTypes = {
  slim: PropTypes.bool,
  icon: PropTypes.string,
  iconLabel: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  onSize: PropTypes.func,
  // other prop types
};

export default Event;
