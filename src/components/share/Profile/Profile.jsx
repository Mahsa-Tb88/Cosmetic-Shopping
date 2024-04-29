import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./profile.css";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineError } from "react-icons/md";
import { updateUser } from "../../../utils/api";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../../store/slices/userSlice";
export default function Profile() {
  const [failMessage, setFailMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const { register, handleSubmit, watch, formState } = useForm({
    defaultValues: {
      name: user.firstname,
      family: user.lastname,
      username: user.username,
    },
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const { errors, isSubmitting } = formState;

  async function onSubmit(data) {
    setFailMessage("");
    setSuccessMessage("");
    const result = await updateUser(
      user.id,
      data.name,
      data.family,
      data.password,
      data.role
    );
    if (result.success) {
      setSuccessMessage("Your profile is updated Successfully");
      dispatch(
        userActions.setUser({
          ...user,
          firstname: data.name,
          lastname: data.family,
        })
      );
    } else {
      setFailMessage(result.message);
    }
    setTimeout(() => window.scrollTo({ top: 0, behavior: "instant" }), 10);
  }
  return (
    <div className="container profile-user ">
      <Helmet>
        <title>Profile</title>
      </Helmet>
      {failMessage && (
        <div>
          <h2 className="bg-white text-danger w-75 mb-5 fs-2 py-3 d-flex justify-content-center align-items-center">
            <MdOutlineError className="error" />
            {failMessage}
          </h2>
        </div>
      )}
      {successMessage && (
        <div>
          <h2 className="bg-white text-success w-75 mb-5 fs-3 py-3 px-3  d-flex justify-content-center align-align-items-baseline ">
            <FaCheckCircle className="check" />
            {successMessage}
          </h2>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex flex-column align-items-baseline mb-5">
          <label className="fs-3 fs-3 mb-2">Name</label>
          <input
            type="text"
            className="inputProfile fs-4 px-2 py-3 rounded-1 input"
            {...register("name", { required: "You must enter a name" })}
          />
          {errors.name && <p className="errors">{errors.name.message}</p>}
        </div>
        <div className="d-flex flex-column align-items-baseline mb-5">
          <label className="fs-3 mb-2">Family</label>
          <input
            type="text"
            className="inputProfile fs-4 px-2 py-3 rounded-1 input"
            {...register("family", { required: "You must enter a Family" })}
          />
          {errors.name && <p className="errors">{errors.family.message}</p>}
        </div>
        <div className="d-flex flex-column align-items-baseline mb-5">
          <label className="fs-3 mb-2">Username</label>
          <input
            type="text"
            className="inputProfile fs-4 px-2 py-3 rounded-1 input"
            {...register("username", {
              disabled: true,
            })}
          />
        </div>
        <div className="d-flex flex-column align-items-baseline mb-5">
          <label className="fs-3 mb-2">Password</label>
          <input
            type="password"
            className="inputProfile fs-4 px-2 py-3 rounded-1 input"
            {...register("password", {
              disabled: true,
            })}
          />
          {errors.password && (
            <p className="errors mt-3 border-0">{errors.password.message}</p>
          )}
        </div>
        <div className="d-flex flex-column align-items-baseline mb-5">
          <label className="fs-3 mb-2">Confirm Password</label>
          <input
            type="password"
            className="inputProfile px-2 py-3 fs-4 rounded-1 input"
            {...register("confirm", {
              disabled: true,
              validate(value) {
                if (watch("password") !== value) {
                  return "Your confirm password does not match the passwor";
                }
              },
            })}
          />
          {errors.confirm && (
            <p className="errors mt-3 border-0">{errors.confirm.message}</p>
          )}
        </div>
        {isSubmitting ? (
          <button
            type="submit"
            className="btn-submit border-0 py-2 fs-3 mt-5 disabled"
          >
            <span className="spinner-grow spinner-spinner-grow-sm"></span>
          </button>
        ) : (
          <button
            type="submit"
            className=" w-25 btn-submit border-0 py-3 fs-3 mt-2 mb-5 my-md-5"
          >
            Save
          </button>
        )}
      </form>
    </div>
  );
}
