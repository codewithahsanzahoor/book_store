import React from "react";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../http/api";

function RegisterPage() {
	//? create use ref for email and password data from user input
	const emailRef = React.useRef<HTMLInputElement>(null);
	const passwordRef = React.useRef<HTMLInputElement>(null);
	const nameRef = React.useRef<HTMLInputElement>(null);
	// console.log(emailRef, passwordRef);
	const Navigate = useNavigate();

	//? create use mutation for login in react query
	const mutation = useMutation({
		mutationFn: register,
		onSuccess: (data) => {
			// console.log("data", data);
			// console.log("login successfully", data);
			localStorage.setItem("token", data.token);
			Navigate("/dashboard/home");
		},
	});

	//? create function to handle login and send data to backend
	const handleRegisterSubmit = () => {
		const email = emailRef.current?.value;
		const password = passwordRef.current?.value;
		const name = nameRef.current?.value;

		if (!name || !email || !password) {
			return alert("Please enter email and password");
		}

		//? calling use mutation function will automatically send data to mutationFn in react query
		mutation.mutate({ name, email, password });
		// console.log("data", { email, password });
	};
	return (
		<>
			<div className="flex justify-center items-center bg-base-200 min-h-screen">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
						<form className="card-body">
							<h1 className="text-3xl font-bold text-center pb-7">
								Register
							</h1>
							<label className="input input-bordered input-md flex items-center gap-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 16 16"
									fill="currentColor"
									className="h-4 w-4 opacity-70"
								>
									<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
								</svg>
								<input
									type="text"
									className="grow"
									placeholder="Username"
									defaultValue={""}
									ref={nameRef}
								/>
							</label>
							<label className="input input-bordered input-md flex items-center gap-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 16 16"
									fill="currentColor"
									className="h-4 w-4 opacity-70"
								>
									<path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
									<path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
								</svg>
								<input
									type="text"
									className="grow"
									placeholder="email@gmail.com"
									defaultValue={""}
									ref={emailRef}
								/>
							</label>

							<label className="input input-bordered input-md flex items-center gap-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 16 16"
									fill="currentColor"
									className="h-4 w-4 opacity-70"
								>
									<path
										fillRule="evenodd"
										d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
										clipRule="evenodd"
									/>
								</svg>
								<input
									type="password"
									className="grow"
									defaultValue={""}
									placeholder="Password"
									ref={passwordRef}
									required
								/>
							</label>
							{mutation.isError && (
								<p className="text-red-600 text-center my-3">
									"something went wrong in registering please
									try again"
								</p>
							)}
							<button
								className={
									mutation.isLoading
										? "btn-disabled btn btn-primary mt-4 font-semibold text-xl"
										: "btn btn-primary mt-4 font-semibold text-xl"
								}
								onClick={(e) => {
									e.preventDefault();
									handleRegisterSubmit();
								}}
							>
								{mutation.isLoading && (
									<span>
										<i className="ri-loader-4-fill animate-spin"></i>
									</span>
								)}{" "}
								Create Account
							</button>
							<Link to="/login">
								<button type="button" className="btn btn-link ">
									Already have a account want to Login
								</button>
							</Link>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default RegisterPage;
