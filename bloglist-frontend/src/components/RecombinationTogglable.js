import React ,{ useState }from  'react';
import PropTypes from 'prop-types'
const Togglable = (props) => {
  const [visible, setVisible] = useState(false);

  const hideWhenVisible = { display: visible ? "none" : "" };
  const showWhenVisible = { display: visible ? "" : "none" };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  if (visible === false) {
    return (
      <div style={hideWhenVisible}>
        <button onClick={toggleVisibility}>{props.buttonLabel}</button>
      </div>
    );
  } else {
    return (
      <div style={showWhenVisible}>
        {props.children}
        <button onClick={toggleVisibility}>cancel</button>
      </div>
    );
  }

//   return (
//     <div>
//       <div style={hideWhenVisible}>
//         <button onClick={toggleVisibility}>{props.buttonLabel}</button>
//       </div>
//     </div>
//   );
};

Togglable.prototype = {
  buttonLabel: PropTypes.string.isRequired,
};
export default Togglable;
