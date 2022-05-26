import React, { useEffect } from "react";
import google from "../../assets/icons/google.png";
import {
  useSignInWithGoogle,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading";
import useToken from "../../Hooks/useToken";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [token] = useToken(user || gUser);
  let signInErrorMessage;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);
  if (loading || gLoading) {
    return <Loading />;
  }
  if (error || gError) {
    signInErrorMessage = (
      <p>
        <small className="text-red-500">
          {error?.message || gError?.message}
        </small>
      </p>
    );
  }
  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl text-primary font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Please provide a valid email",
                  },
                })}
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 character or lognger",
                  },
                })}
                type="password"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {signInErrorMessage}
            <input
              className="btn btn-primary w-full"
              type="submit"
              value="Login"
            />
          </form>
          <p className="text-center">
            <small>
              New to Doctors Portal?{" "}
              <Link to="/signup" className="text-primary">
                Create new account
              </Link>
            </small>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-primary btn-outline"
          >
            Continue with Google
            <img className="h-6 ml-2" src={google} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
