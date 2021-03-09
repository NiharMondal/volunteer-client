import React from 'react';
import { useHistory } from 'react-router';

const NotFound = () => {
  const history = useHistory();
  const goBack = () => {
    history.push('/')
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw' }}>
      <div className="border rounded p-4">
        <h4 className="text-danger">
          Sorry, the page you searched for, <br/>
          Not Found
      </h4>
      <button onClick={goBack} className="btn btn-success">Go Back</button>
      </div>
    </div>
  );
};

export default NotFound;