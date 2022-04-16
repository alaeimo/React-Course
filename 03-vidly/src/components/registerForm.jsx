import React from "react";
import Joi from "joi-browser";
import Form from "./common/from";

class RegisterForm extends Form {
  state = { data: { email: "", password: "", name: "" }, errors: {} };

  schema = {
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().min(4).max(32).label("Password"),
    name: Joi.string().required().label("Name"),
  };
  doSubmit = () => {
    console.log("Register button submitted!");
  };
  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email", "email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
