import { useQuery } from "react-query";
import { getUsers } from "../http/api";

function UsersPage() {
    const { data: users, isLoading, isError } = useQuery("users", getUsers);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching users.</div>;
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-8">Manage Users</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user) => (
                            <tr key={user._id}>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <span className={`badge ${user.role === 'admin' ? 'badge-primary' : 'badge-ghost'}`}>
                                        {user.role}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UsersPage;
