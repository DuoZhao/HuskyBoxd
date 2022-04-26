import "./index.css";
import {useRef} from "react";
import {useNavigate} from "react-router-dom";
import {useProfile} from "../contexts/profile-context.js";
const LoginComponent = () => {
    const navigate = useNavigate();
    const {signin, signup} = useProfile()
    const create = async () => {
        try {
            await signup(
                signupUserName.current.value,
                signupEmail.current.value,
                signupPassword.current.value
            )
            navigate("/huskyboxd/home")
        } catch (e) {
            alert('oops')
        }
    }
    const login = async () => {
        try {
            await signin(
                loginEmail.current.value,
                loginPassword.current.value
            )
            navigate("/huskyboxd/home")
        } catch (e) {
            alert('oops')
            console.log(e)
        }
    }
    const signupEmail = useRef();
    const signupPassword = useRef();
    const signupUserName = useRef();
    const loginEmail = useRef();
    const loginPassword = useRef();
    return (
        <>
            <div className="container wd-login">
                <div className="row justify-content-center">
                    <div className="col-12 text-center align-self-center py-5">
                        <div className="pb-5 pt-5 pt-sm-2 text-center">
                            <h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
                            <input className="checkbox" type="checkbox" id="wd-reg-log" name="wd-reg-log"/>
                            <label htmlFor="wd-reg-log"/>
                            <div className="card-3d-wrap mx-auto">
                                <div className="card-3d-wrapper">
                                    <div className="card-front">
                                        <div className="center-wrap">
                                            <div className="text-center">
                                                <h4 className="mb-4 pb-3">Log In</h4>
                                                <div className="form-group">
                                                    <input type="email" name="wd-login-email" className="form-style" ref={loginEmail}
                                                           placeholder="Your Email" id="wd-login-email" autoComplete="off"/>
                                                    <i className="input-icon fa-solid fa-at" id="wd-at-login"/>
                                                </div>
                                                <div className="form-group mt-2">
                                                    <input type="password" name="wd-login-pass" className="form-style" ref={loginPassword}
                                                           placeholder="Your Password" id="wd-login-pass" autoComplete="off"/>
                                                    <i className="input-icon fa-solid fa-lock" id="wd-pass-login"/>
                                                </div>
                                                <a href="#" className="btn mt-4" onClick={() => login()}>submit</a>
                                                <p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot
                                                    your password?</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-back">
                                        <div className="center-wrap">
                                            <div className="text-center">
                                                <h4 className="mb-4 pb-3">Sign Up</h4>
                                                <div className="form-group">
                                                    <input type="text" name="logname" className="form-style" ref={signupUserName}
                                                           placeholder="Your Full Name" id="logname"
                                                           autoComplete="off"/>
                                                    <i className="input-icon fas fa-user" id="wd-signup-user"/>
                                                </div>
                                                <div className="form-group mt-2">
                                                    <input type="email" name="wd-signup-email" className="form-style" ref={signupEmail}
                                                           placeholder="Your Email" id="wd-signup-email" autoComplete="off"/>
                                                    <i className="input-icon fas fa-at" id="wd-signup-at"/>
                                                </div>
                                                <div className="form-group mt-2">
                                                    <input type="password" name="wd-signup-pass" className="form-style" ref={signupPassword}
                                                           placeholder="Your Password" id="wd-signup-pass" autoComplete="off"/>
                                                    <i className="input-icon fas fa-lock" id="wd-signup-lock"/>
                                                </div>
                                                <a href="#" className="btn btn-primary mt-4" onClick={() => create()}>submit</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default LoginComponent;