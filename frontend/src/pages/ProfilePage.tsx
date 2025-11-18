import { useEffect, useState } from "react";
import { useAuthStore } from "../store/authStore";
import { useMutation, useQueryClient } from "react-query";
import { updateUserProfile, updateUserPassword } from "../http/api";
import { toast } from "react-hot-toast";

function ProfilePage() {
	const { user, fetchUserProfile } = useAuthStore();
	const queryClient = useQueryClient();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const [currentPassword, setCurrentPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmNewPassword, setConfirmNewPassword] = useState("");

	useEffect(() => {
		fetchUserProfile();
	}, [fetchUserProfile]);

	useEffect(() => {
		if (user) {
			setName(user.name);
			setEmail(user.email);
		}
	}, [user]);

	const profileMutation = useMutation(updateUserProfile, {
		onSuccess: () => {
			queryClient.invalidateQueries("user");
			toast.success("Profile updated successfully");
		},
		onError: () => {
			toast.error("Failed to update profile");
		},
	});

	const passwordMutation = useMutation(updateUserPassword, {
		onSuccess: () => {
			toast.success("Password updated successfully");
			setCurrentPassword("");
			setNewPassword("");
			setConfirmNewPassword("");
		},
		onError: (error: any) => {
			toast.error(
				error.response?.data?.message || "Failed to update password"
			);
		},
	});

	const handleSave = () => {
		profileMutation.mutate({ name, email });
	};

	const handleUpdatePassword = () => {
		if (newPassword !== confirmNewPassword) {
			toast.error("New passwords do not match");
			return;
		}
		passwordMutation.mutate({ currentPassword, newPassword });
	};

	return (
		<div>
			<h2 className="text-3xl font-bold font-serif mb-6">My Profile</h2>

			{/* Profile Information Form */}
			<div className="space-y-4">
				<h3 className="text-xl font-semibold">Personal Information</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<input
						type="text"
						placeholder="Full Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						className="input input-bordered w-full md:col-span-2"
					/>
					<input
						type="email"
						placeholder="Email Address"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="input input-bordered w-full md:col-span-2"
					/>
				</div>
				<button
					className="btn btn-primary"
					onClick={handleSave}
					disabled={profileMutation.isLoading}
				>
					{profileMutation.isLoading ? "Saving..." : "Save Changes"}
				</button>
			</div>

			<div className="divider"></div>

			{/* Change Password Form */}
			<div className="space-y-4">
				<h3 className="text-xl font-semibold">Change Password</h3>
				<input
					type="password"
					placeholder="Current Password"
					value={currentPassword}
					onChange={(e) => setCurrentPassword(e.target.value)}
					className="input input-bordered w-full max-w-xs"
				/>
				<input
					type="password"
					placeholder="New Password"
					value={newPassword}
					onChange={(e) => setNewPassword(e.target.value)}
					className="input input-bordered w-full max-w-xs"
				/>
				<input
					type="password"
					placeholder="Confirm New Password"
					value={confirmNewPassword}
					onChange={(e) => setConfirmNewPassword(e.target.value)}
					className="input input-bordered w-full max-w-xs"
				/>
				<div>
					<button
						className="btn btn-primary"
						onClick={handleUpdatePassword}
						disabled={passwordMutation.isLoading}
					>
						{passwordMutation.isLoading
							? "Updating..."
							: "Update Password"}
					</button>
				</div>
			</div>
		</div>
	);
}

export default ProfilePage;
