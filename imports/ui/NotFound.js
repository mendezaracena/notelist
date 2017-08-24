import React from 'react';
import { Link } from 'react-router';

// Create NotFound Component
// Stateless Function Component:

export default () => {
  return (
    <div className="boxed-view">
      <div className="boxed-view__box">
        <h1>Not found here </h1>
        <p>Hmmm, we're unable to find that page.</p>
        {/* Link is a react component to link pages without full page refreshing */}
        <Link to="/" className="button button--link">Head home</Link>
      </div>
    </div>
  );
}


// export default class NotFound extends React.Component {
//   render() {
//     return <p>Not found comoponent here </p>
//   }
// }
