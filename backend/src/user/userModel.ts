import mongoose from "mongoose";
import { User } from "./userTypes";

const userSchema = new mongoose.Schema<User>(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		role: { type: String, enum: ["user", "admin"], default: "user" },
	},
	{ timestamps: true }
);

userSchema.methods.toJSON = function () {
	const userObject = this.toObject();
	delete userObject.password;
	return userObject;
};

const User = mongoose.model<User>("User", userSchema);

export default User;
