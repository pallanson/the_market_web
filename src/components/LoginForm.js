import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

const LoginForm = () => (
    <div className="container">
        <div class="form-group row">
            <label for="email_address" class="col-md-4 col-form-label text-md-right">E-Mail</label>
            <div class="col-md-6">
                <input type="text" id="email_address" class="form-control" name="email-address" required autofocus/>
            </div>
        </div>
        <div class="form-group row">
            <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
            <div class="col-md-6">
                <input type="password" id="password" class="form-control" name="password" required/>
            </div>
        </div>
        <div class="form-group row">
            <div class="col-md-6 offset-md-4">
                <div class="checkbox">
                    <label>
                        <input type="checkbox" name="remember"/>
                        Remember Me
                    </label>
                </div>
            </div>
        </div>
        <div class="col-md-8 offset-md-4">
            <button type="submit" class="btn btn-primary"> Register</button>
            <a href="#" class="btn btn-link"> Forgot Your Password? </a>
        </div>
    </div>
);

export default LoginForm;