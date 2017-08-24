import React from 'react';
import { Accounts } from 'meteor/accounts-base';

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
const PrivateHeader = (props) => {
  return (
    <div className="header-view">
      <div className="header-view__box">
        <h1>{props.title}</h1>
        <button className="header-view__logout" onClick={() => Accounts.logout()}>Logout</button>
      </div>
    </div>
  );
};


// make the title required
PrivateHeader.propTypes = {
  title: React.PropTypes.string.isRequired
};

export default PrivateHeader;
