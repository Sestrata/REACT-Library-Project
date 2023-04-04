
import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { useAuthContext } from "../../contexts/AuthContext";

export const Register = () => {
    const { onRegisterSubmit } = useAuthContext();
    const { values, changeHandler, onSubmit, formErrors } = useForm({
        email: '',
        username: '',
        password: '',
        rePassword: '',
    }, onRegisterSubmit);

    return (
        <section className="register">
            <form method="POST" onSubmit={onSubmit} >
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
                        {formErrors.email && <p className="formError">{formErrors.email}</p>}
                    </div>
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
                        {formErrors.username && <p className="formError">{formErrors.username}</p>}
                    </div>
                    <div>
                        <label htmlFor="registerPassword">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={values.password}
                            onChange={changeHandler}
                        />
                        {formErrors.password && <p className="formError">{formErrors.password}</p>}
                    </div>
                    <div>
                        <label htmlFor="registerPassword">Repassword:</label>
                        <input
                            type="password"
                            id="rePassword"
                            name="rePassword"
                            value={values.rePassword}
                            onChange={changeHandler}
                        />
                        {formErrors.rePassword && <p className="formError">{formErrors.rePassword}</p>}
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
    );
};