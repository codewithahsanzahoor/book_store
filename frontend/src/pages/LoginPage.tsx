import React from "react";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../http/api";

function LoginPage() {
	//? create use ref for email and password data from user input
	const emailRef = React.useRef<HTMLInputElement>(null);
	const passwordRef = React.useRef<HTMLInputElement>(null);
	// console.log(emailRef, passwordRef);
	const Navigate = useNavigate();

	//? create use mutation for login in react query
	const mutation = useMutation({
		mutationFn: login,
		onSuccess: (data) => {
			// console.log("data", data);
			// console.log("login successfully", data);
			localStorage.setItem("token", data.token);
			Navigate("/dashboard/home");
		},
	});

	//? create function to handle login and send data to backend
	const handleLoginSubmit = () => {
		const email = emailRef.current?.value;
		const password = passwordRef.current?.value;

		if (!email || !password) {
			return alert("Please enter email and password");
		}

		//? calling use mutation function will automatically send data to mutationFn in react query
		mutation.mutate({ email, password });
		// console.log("data", { email, password });
	};

	return (
		<>
			<div className="flex justify-center items-center bg-base-200 min-h-screen">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
						<form className="card-body">
							<h1 className="text-3xl font-bold text-center pb-7">Login</h1>
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
									ref={emailRef}
									type="text"
									className="grow"
									placeholder="Email"
									defaultValue=""
									required
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
									ref={passwordRef}
									type="password"
									className="grow"
									placeholder="Password"
									defaultValue=""
									required
								/>
							</label>
							<button
								className={
									mutation.isLoading
										? "btn-disabled btn btn-primary mt-4 font-semibold text-xl"
										: "btn btn-primary mt-4 font-semibold text-xl"
								}
								onClick={(e) => {
									e.preventDefault();
									handleLoginSubmit();
								}}
							>
								{mutation.isLoading && (
									<span>
										<i className="ri-loader-4-fill animate-spin"></i>
									</span>
								)}{" "}
								Login
							</button>

							<Link to="/register">
								<button type="button" className="btn btn-link ">
									Don't have a account want to Register
								</button>
							</Link>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default LoginPage;
