import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

export const Login = () => {
    const { onLoginSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
    }, onLoginSubmit);

    return (
        <section className="login">
            <form method="POST" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Login</h1>
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
                    {/* <p>Can't be empty</p> */}
                    <div>
                        <label htmlFor="loginPassword">Password:</label>
                        <input
                            type="password"
                            id="login-password"
                            name="password"
                            value={values.password}
                            onChange={changeHandler}
                        />
                    </div>
                    {/* <p></p> */}
                    <div className="submitBtn">
                        <input type="submit" value="Login" />
                    </div>
                    <p className="redirectField">
                        <span>If you don't have profile click <Link to="/register">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    )
}