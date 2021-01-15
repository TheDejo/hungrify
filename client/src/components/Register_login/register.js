import React, { Component } from 'react';
import FormField from '../utils/Form/formfield';
import { update, generateData, isFormValid } from '../utils/Form/formActions';
import Dialog from '@material-ui/core/Dialog';

import { connect } from 'react-redux';
import { registerUser } from '../../actions/user_actions';
import {Link} from 'react-router-dom';

import '../../style/Register.css';

class Register extends Component {

    state = {
        formError: false,
        formSuccess:false,
        formdata:{
            name: {
                element: 'input',
                value: '',
                config:{
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'firstname'
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:''
            },
            lastname: {
                element: 'input',
                value: '',
                config:{
                    name: 'lastname_input',
                    type: 'text',
                    placeholder: 'lastname'
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:''
            },
            email: {
                element: 'input',
                value: '',
                config:{
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'email'
                },
                validation:{
                    required: true,
                    email: true
                },
                valid: false,
                touched: false,
                validationMessage:''
            },
            password: {
                element: 'input',
                value: '',
                config:{
                    name: 'password_input',
                    type: 'password',
                    placeholder: 'password'
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:''
            },
            confirmPassword: {
                element: 'input',
                value: '',
                config:{
                    name: 'confirm_password_input',
                    type: 'password',
                    placeholder: 'confirm password'
                },
                validation:{
                    required: true,
                    confirm: 'password'
                },
                valid: false,
                touched: false,
                validationMessage:''
            }
        }
    }

    updateForm = (element) => {
        const newFormdata = update(element,this.state.formdata,'register');
        this.setState({
            formError: false,
            formdata: newFormdata
        })
    }

    submitForm= (event) =>{
        event.preventDefault();
        
        let dataToSubmit = generateData(this.state.formdata,'register');
        let formIsValid = isFormValid(this.state.formdata,'register')

        if(formIsValid){
            this.props.dispatch(registerUser(dataToSubmit))
            .then(response =>{ 
                if(response.payload.success){
                    this.setState({
                        formError: false,
                        formSuccess: true
                    });
                    setTimeout(()=>{
                        this.props.history.push('/register_login');
                    },3000)
                } else {
                    this.setState({formError: true})
                }
            }).catch(e => {
                this.setState({formError: true})
            })
        } else {
            this.setState({
                formError: true
            })
        }
    }

    render() {
        return (
            <div className="bg">
                <div className="form">
                    <form onSubmit={(event)=>  this.submitForm(event)}>
                        <h2>Sign Up</h2>
                            <div className="input-box-1">
                                <div className="input-field">
                                    <FormField
                                        id={'name'}
                                        formdata={this.state.formdata.name}
                                        change={(element)=> this.updateForm(element)}
                                    />
                                </div>
                                <div className="input-field">
                                    <FormField
                                        id={'lastname'}
                                        formdata={this.state.formdata.lastname}
                                        change={(element)=> this.updateForm(element)}
                                    />
                                </div>
                                </div>
                                <div className="input-box">
                                    <FormField
                                        id={'email'}
                                        formdata={this.state.formdata.email}
                                        change={(element)=> this.updateForm(element)}
                                    />
                                </div>
                                <div className="input-box-1">
                                    <div className="input-field">
                                        <FormField
                                            id={'password'}
                                            formdata={this.state.formdata.password}
                                            change={(element)=> this.updateForm(element)}
                                        />
                                    </div>
                                    <div className="input-field">
                                        <FormField
                                            id={'confirmPassword'}
                                            formdata={this.state.formdata.confirmPassword}
                                            change={(element)=> this.updateForm(element)}
                                        />
                                    </div>
                                </div>
                                <div>
                                    { this.state.formError ?
                                        <div className="error_label">
                                            Please check your data
                                        </div>
                                    :null}
                                    <button onClick={(event)=> this.submitForm(event)}>
                                        Sign Up
                                    </button>
                                    <br/>
                                    <Link to="/register_login">
                                     already have an account? Sign In
                                    </Link>
                                </div>
                            </form>
                        </div>
                        

                <Dialog open={this.state.formSuccess}>
                    <div className="dialog_alert">
                        <div>You are signed up</div>
                        <div>
                            Wait, you will be redirected to sign in...
                        </div>
                    </div>
                </Dialog>


            </div>
        );
    }
}

export default connect()(Register);
