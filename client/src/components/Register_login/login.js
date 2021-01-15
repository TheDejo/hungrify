import React, { Component } from 'react';
import FormField from '../utils/Form/formfield';
import { update, generateData, isFormValid } from '../utils/Form/formActions';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { loginUser } from '../../actions/user_actions';
import {Link} from 'react-router-dom';
import '../../style/Register.css';



class Login extends Component {

    state = {
        formError: false,
        formSuccess:'',
        formdata:{
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
            }
        }
    }

    updateForm = (element) => {
        const newFormdata = update(element,this.state.formdata,'login');
        this.setState({
            formError: false,
            formdata: newFormdata
        })
    }


    submitForm= (event) =>{
        event.preventDefault();
        
        let dataToSubmit = generateData(this.state.formdata,'login');
        let formIsValid = isFormValid(this.state.formdata,'login')

        if(formIsValid){
            this.props.dispatch(loginUser(dataToSubmit)).then(response =>{
                if(response.payload.loginSuccess){
                    console.log(response.payload);
                    this.props.history.push('/user/dashboard')
                }else{
                    this.setState({
                        formError: true
                    })
                }
            });

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
                    <form onSubmit={(event)=> this.submitForm(event)}>
                        <h2>Sign In</h2>
                        <div className="input-box">

                        <i className="envelope outline icon"/>
                        <FormField
                            id={'email'}
                            formdata={this.state.formdata.email}
                            change={(element)=> this.updateForm(element)}
                        />

                        </div>
                        
                        <div className="input-box">

                        <i className="lock open icon"/>
                        <FormField
                            id={'password'}
                            formdata={this.state.formdata.password}
                            change={(element)=> this.updateForm(element)}
                        />


                        </div>
                    
                        { this.state.formError ?
                            <div className="error_label">
                                Please check your data
                            </div>
                        :null}
                        <button onClick={(event)=> this.submitForm(event)}>
                            Sign in
                        </button>
                        <br/>
                        <Link to="/register">
                        don't have an account? Sign Up
                        </Link>


                    </form>
                </div>
            </div>
            
        );
    }
}

export default connect()(withRouter(Login));