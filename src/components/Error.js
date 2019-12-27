import React from 'react';

function Error({message}) {
  return (
    <div className="alert alert-danger text-center p2">
      {message}
    </div>
  );
}

export default Error;