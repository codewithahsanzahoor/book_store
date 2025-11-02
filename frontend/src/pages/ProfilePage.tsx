function ProfilePage() {
    return (
        <div>
            <h2 className="text-3xl font-bold font-serif mb-6">My Profile</h2>
            
            {/* Profile Information Form */}
            <div className="space-y-4">
                <h3 className="text-xl font-semibold">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" defaultValue="John" className="input input-bordered w-full" />
                    <input type="text" placeholder="Last Name" defaultValue="Doe" className="input input-bordered w-full" />
                    <input type="email" placeholder="Email Address" defaultValue="john.doe@example.com" className="input input-bordered w-full md:col-span-2" />
                </div>
                <button className="btn btn-primary">Save Changes</button>
            </div>

            <div className="divider"></div>

            {/* Change Password Form */}
            <div className="space-y-4">
                <h3 className="text-xl font-semibold">Change Password</h3>
                <input type="password" placeholder="Current Password" className="input input-bordered w-full max-w-xs" />
                <input type="password" placeholder="New Password" className="input input-bordered w-full max-w-xs" />
                <input type="password" placeholder="Confirm New Password" className="input input-bordered w-full max-w-xs" />
                <div>
                    <button className="btn btn-primary">Update Password</button>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
