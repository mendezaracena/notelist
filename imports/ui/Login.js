import React from 'react';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

// Create Login Component
export class Login extends React.Component {

  // Building the State -- constructor gets the props
  constructor(props) {
    // To make sure that the React.Component gets the values that it needs, we
    // call the super()
    super(props);
      // Creating the State
      this.state = {
        error: ''
      };
  }

  onSubmit(e){
    // Prevents the form to refresh the webpage
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim()

    this.props.loginWithPassword({email}, password, (err) => {
      if (err) {
        this.setState({error: 'Unable to login. Email or password are incorrect.'});
      } else {
        this.setState({error: ''});
      }
    });

  }


  render() {
    return (
    <div className="boxed-view">
        <div className="boxed-view__box">
          <h1>Login</h1>

             {/* Turnary operator */}
             {/* If it is, the first is true, if its false the second runs */}
             {/* Undefined is ignored as well as null */}
            {this.state.error ? <p>{this.state.error}</p> : undefined}

            <form onSubmit={this.onSubmit.bind(this)} noValidate className="boxed-view__form">
              <input type="email" ref="email" name="email" placeholder="Email"/>
              <input type="password" ref="password" name="password" placeholder="Password"/>
              <button className="button">Login</button>
            </form>


          <Link to="/signup">Need an account?</Link>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginWithPassword: React.PropTypes.func.isRequired
};

export default createContainer(() => {
  return {
    loginWithPassword: Meteor.loginWithPassword
  };
}, Login)
