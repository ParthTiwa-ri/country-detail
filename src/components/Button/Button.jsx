/* eslint-disable react/prop-types */

import "./Button.css";
function Border({ children, classname = "", btnflex = "" }) {
  return (
    <div className={classname}>
      <button className={`country__details--button ${btnflex}`}>
        {children}
      </button>
    </div>
  );
}

export default Border;
