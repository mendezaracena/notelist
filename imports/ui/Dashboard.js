import React from 'react';

import PrivateHeader from './PrivateHeader';


// Statless Functional Component
export default () => {
  return(
    <div>
      <PrivateHeader title="Dashboard"/>
      <div className="page-content">
        Dashboard page content
      </div>
    </div>
  );
}
