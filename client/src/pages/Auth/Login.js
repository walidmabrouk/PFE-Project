import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Inputs from "../../components/Inputs";
import { LoginAction } from "../../redux/actions/authActions";

function Login() {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.errors);
  const navigate = useNavigate();
  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(LoginAction(form, navigate));
  };
  return (
    // <div className="container p-4 mt-4">
    //   <div className="row justify-content-evenly mt-4">
    //     <div className="col-lg-6 col-md-12 mt-4">
    //       <div className="d-flex">
    //         <i className="fa-solid fa-right-to-bracket fs-1 mx-2"></i>{" "}
    //         <h2>Login</h2>
    //       </div>
    //       <div
    //         className="p-6 shadow-lg p-3 mb-5 bg-body rounded"
    //         style={{ backgroundColor: "white" }}
    //       >
    //         <form onSubmit={onSubmit}>

    //           <div className="d-flex justify-content-between">
    //             <button  className="btn btn-outline-primary">
    //               Save <i className="fa-solid fa-floppy-disk"></i>
    //             </button>
    // </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="mt-16 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="max-w-md mx-auto" onSubmit={onSubmit}>
          <Inputs
            name="email"
            label="Email"
            type="text"
            icon="fa-solid fa-at"
            onChangeHandler={onChangeHandler}
            errors={errors.email}
          />
          <Inputs
            name="password"
            label="Mot de passe"
            type="password"
            icon="fa-solid fa-key"
            onChangeHandler={onChangeHandler}
            errors={errors.password}
          />
          <button type="submit" className="btn btn-primary ">
            Connexion
          </button>
          <div className="text-center py-2 text-gray-500">
            <Link to="/register">j'ai pas un compte</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
