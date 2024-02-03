/* eslint-disable react/prop-types */

import "./Button.css";
function Border({ children, classname = "" }) {
  return (
    <div className={classname}>
      <button className="country__details--button">{children}</button>
    </div>
  );
}

export default Border;
