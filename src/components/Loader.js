import React from "react";
const Loader = ({ isLoading }) => {
  return (
    <div>
      {isLoading && (
        <button className="button is-loading loader">loading</button>
      )}
    </div>
  );
};

export default Loader;
