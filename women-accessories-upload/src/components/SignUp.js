import { Component } from "react";
import React from "react";
import { FormErrors } from './FormErrors';
import axios from "axios";

class SignUp extends Component {
    constructor (props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          repeatPassword: '',
          address: '',
          phone: '',
          firstName: '',
          lastName: '',
          userName: '',
          formErrors: {email: '', password: ''},
          emailValid: false,
          passwordValid: false,
          formValid: false
        }
    }
    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
                      () => { this.validateField(name, value) });
    }
    
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
    
        switch(fieldName) {
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
          case 'password':
            passwordValid = value.length >= 6; //add special char
            fieldValidationErrors.password = passwordValid ? '': ' is too short';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid
                      }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }
    
    errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
    }

    handleRegister = () => {
        axios.post("https://localhost:3000/")
        .then(response => {
            console.log(response.data);
        })
        .catch(function(error) {
            console.log(error);
        });
    }

    render () {
    return (
        <section style={{backgroundColor: "#eee"}}>
            <div class="container h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-lg-12 col-xl-11">
                    <div class="card text-black" style={{borderRadius: "25px"}}>
                    <div class="card-body p-md-5">
                        <div class="row justify-content-center">
                            <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Create Your Account</p>
                                <div className="panel panel-default" style={{color:"red"}}>
                                <FormErrors formErrors={this.state.formErrors} />
                                </div>
                                 <form class="mx-1 mx-md-4">
                                    <div class="d-flex flex-row align-items-center mb-4">
                                        <i class="fas fa-id-card fa-lg me-3 fa-fw"></i>
                                        <div class="form-outline flex-fill mb-0">
                                        <label class="form-label">First Name</label>
                                        <input type="text" class="form-control" required name="firstName" 
                                        value={this.state.firstName} 
                                        onChange={this.handleUserInput} />
                                        </div>
                                    </div>

                                    <div class="d-flex flex-row align-items-center mb-4">
                                        <i class="fas fa-id-card fa-lg me-3 fa-fw"></i>
                                        <div class="form-outline flex-fill mb-0">
                                        <label class="form-label">Last Name</label>
                                        <input type="text" class="form-control" required name="lastName" 
                                        value={this.state.lastName} 
                                        onChange={this.handleUserInput} />
                                        </div>
                                    </div>

                                    <div class="d-flex flex-row align-items-center mb-4">
                                    <i class="fa fa-phone-square fa-lg me-3 fa-fw" ></i>
                                        <div class="form-outline flex-fill mb-0">
                                        <label class="form-label">Phone</label>
                                        <input type="text" class="form-control" required name="phone" 
                                        value={this.state.phone} 
                                        onChange={this.handleUserInput} />
                                        </div>
                                    </div>

                                    <div class="d-flex flex-row align-items-center mb-4">
                                        <i class="fa fa-address-book fa-lg me-3 fa-fw"></i>
                                        <div class="form-outline flex-fill mb-0">
                                        <label class="form-label">Address</label>
                                        <input type="text" class="form-control" required name="address" 
                                        value={this.state.address} 
                                        onChange={this.handleUserInput} />
                                        </div>
                                    </div>


                                    <div class="d-flex flex-row align-items-center mb-4">
                                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                        <div class="form-outline flex-fill mb-0">
                                        <label class="form-label">Your Email</label>
                                        <input type="email" required className="form-control" name="email"
                                        value={this.state.email}
                                        onChange={this.handleUserInput}  />
                                        </div>
                                    </div>

                                    <div class="d-flex flex-row align-items-center mb-4">
                                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                        <div class="form-outline flex-fill mb-0">
                                        <label class="form-label">User Name</label>
                                        <input type="text" class="form-control" required name="userName" 
                                        value={this.state.userName} 
                                        onChange={this.handleUserInput} />
                                        </div>
                                    </div>

                                    <div class="d-flex flex-row align-items-center mb-4">
                                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                        <div class="form-outline flex-fill mb-0">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" className="form-control" name="password"
                                            value={this.state.password}
                                            onChange={this.handleUserInput}  />
                                        </div>
                                    </div>

                                    <div class="d-flex flex-row align-items-center mb-4">
                                        <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                                        <div class="form-outline flex-fill mb-0">
                                        <label class="form-label">Repeat your password</label>
                                        <input type="password" class="form-control" required name="repeatPassword" 
                                        value={this.state.repeatPassword} 
                                        onChange={this.handleUserInput} />
                                        </div>
                                    </div>

                                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                        <button type="button" class="btn btn-primary btn-lg" onClick={this.handleRegister}>Register</button>
                                    </div>

                                </form> 
                            </div>
                            <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png" class="img-fluid" alt="Sample image" />
                            </div>
                        </div>
                    </div>
                    </div>
                 </div>
                </div>
            </div>
        </section>
    )
    }
}
export default SignUp;


