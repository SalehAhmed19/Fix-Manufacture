import React from "react";
import google from "../../assets/icons/google.png";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../../Shared/Loading";
import useToken from "../../Hooks/useToken";
import { toast } from "react-toastify";
import { TextField } from "@mui/material";
import { AiFillGoogleCircle } from "react-icons/ai";
import { HashLoader } from "react-spinners";

const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [createUserWitEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  let signInErrorMessage;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [token] = useToken(user || gUser);
  if (loading || gLoading || updating) {
    return (
      <div
        style={{
          height: "100vh",
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HashLoader size={70} color="#FF7400" />
      </div>
    );
  }
  if (token) {
    navigate(from, { replace: true });
  }
  if (error || gError || updateError) {
    signInErrorMessage = (
      <p>
        <small className="text-red-500">
          {error?.message || gError?.message || updateError?.message}
        </small>
      </p>
    );
  }
  const onSubmit = async (data) => {
    await createUserWitEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    toast.success("Verification email send successfully");
  };
  return (
    <div className="flex items-center justify-center h-screen mt-10">
      <div className="lg:w-2/6 w-full mx-5 bg-[#FDBE06] shadow-xl mt-20 rounded-md">
        <div className="card-body">
          <h2 className="text-center text-4xl text-[#000] font-bold">
            Registration
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full">
              {/* <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                })}
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs"
              /> */}
              <TextField
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                })}
                sx={{ marginTop: "10px" }}
                type="text"
                name="name"
                // onChange={(e) => setEmail(e.target.value)}
                id="outlined-basic"
                label="Your Name"
                variant="filled"
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full">
              {/* <label className="label">
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
              /> */}
              <TextField
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
                sx={{ marginTop: "10px" }}
                type="email"
                name="email"
                // onChange={(e) => setEmail(e.target.value)}
                id="outlined-basic"
                label="Your Email"
                variant="filled"
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
            <div className="form-control w-full">
              {/* <label className="label">
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
              /> */}
              <TextField
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
                sx={{ marginTop: "10px" }}
                name="password"
                // onChange={(e) => setEmail(e.target.value)}
                id="outlined-basic"
                label="Password"
                variant="filled"
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
            <p className="mb-2">{signInErrorMessage}</p>
            <button
              className="bg-[#000] p-3 rounded-md text-[#fff] w-full"
              type="submit"
              value="Login"
            >
              SIGN UP
            </button>
          </form>
          <p className="text-center">
            <small>
              Already have an account?{" "}
              <Link to="/login" className="text-[#FF0000]">
                Login
              </Link>
            </small>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="bg-transparent border border-[#000] p-3 rounded-md text-[#000] w-full flex justify-center items-center lg:px-14 hover:bg-[#000] hover:text-[#fff]"
          >
            Continue with GOOGLE
            <AiFillGoogleCircle className="text-2xl ml-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
