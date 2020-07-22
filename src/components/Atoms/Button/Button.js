import React from "react";
import PropTypes from "prop-types";

/**
 * The only true button.
 */

const Button = ({ color = "white", children }) => {
  const styles = {
    color
    // fontSize: Button.sizes[size],
  };
  return <button style={{ backgroundColor: color }}>{children}</button>;
};
Button.propTypes = {
  /**
   * Button label.
   */
  children: PropTypes.string.isRequired,
  color: PropTypes.string
};
Button.defaultProps = {
  color: "white"
  // size: 'normal'
};
// Button.sizes = {
// 	small: '10px',
// 	normal: '14px',
// 	large: '18px',
// };

export default Button;
