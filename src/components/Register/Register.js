import { useForm } from "../../hooks/useForm";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        username: '',
        password: '',
        rePassword: '',
    }, onRegisterSubmit);

    return (
        <section className="register">
            <form method="POST" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Register</h1>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={changeHandler}
                            placeholder="elena@abv.bg"
                        />
                    </div>
                    {/* <p></p> */}
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="username"
                            id="username"
                            name="username"
                            value={values.username}
                            onChange={changeHandler}
                            placeholder="Elena"
                        />
                    </div>
                    {/* <p></p> */}
                    <div>
                        <label htmlFor="registerPassword">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={values.password}
                            onChange={changeHandler}
                        />
                    </div>
                    {/* <p></p> */}
                    <div>
                        <label htmlFor="registerPassword">Repassword:</label>
                        <input
                            type="password"
                            id="rePassword"
                            name="rePassword"
                            value={values.rePassword}
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="submitBtn">
                        <input type="submit" value="Register" />
                    </div>
                    <p className="redirectField">
                        <span>If you already have profile click <Link to="/login">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    )
}