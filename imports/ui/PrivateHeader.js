import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { createContainer } from 'meteor/react-meteor-data';

// export default class PrivateHeader extends React.Component {
//
//   onLogout(){
//     Accounts.logout();
//   }
//
//   render() {
//     return(
//       <div>
//         <h1>{this.props.title}</h1>
//         <button onClick={this.onLogout.bind(this)}>Logout</button>
//       </div>
//     );
//   }
// }


// Statless Functional Component
export const PrivateHeader = (props) => {
  return (
    <div className="header-view">
      <div className="header-view__box">
        <h1>{props.title}</h1>
        <button className="header-view__logout" onClick={() => props.handleLogout()}>Logout</button>
      </div>
    </div>
  );
};


// make the title required
PrivateHeader.propTypes = {
  title: React.PropTypes.string.isRequired,
  handleLogout: React.PropTypes.func.isRequired
};

export default createContainer(() => {
  return {
    handleLogout: () => Accounts.logout()
  };
}, PrivateHeader);

// export default PrivateHeader;
