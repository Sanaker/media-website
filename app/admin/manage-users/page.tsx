/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ManageUsersPage = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const router = useRouter();

  // Fetch users on page load
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");

    if (!loggedIn) {
      router.push("/login"); // Redirect to login if not logged in
    } else {
      setIsLoggedIn(true);
    }
  }, [router]);

  // Fetch users if logged in
  useEffect(() => {
    if (isLoggedIn) {
      const fetchUsers = async () => {
        const res = await fetch("/api/users");
        const data = await res.json();
        setUsers(data);
      };

      fetchUsers();
    }
  }, [isLoggedIn]);

  // Handle user deletion
  const deleteUser = async (id: number) => {
    const res = await fetch(`/api/users/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setUsers(users.filter((user) => user.id !== id));
    } else {
      console.error("Failed to delete user");
    }
  };

  // Handle adding a new user
  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: newUsername, password: newPassword }),
    });

    if (res.ok) {
      const newUser = await res.json();
      setUsers([...users, newUser]);
      setNewUsername("");
      setNewPassword("");
    } else {
      setErrorMessage("Failed to add user");
    }
  };

  // Handle return to admin page
  const handleReturnToAdminPage = () => {
    router.push("/admin"); // Change this to the actual admin page route if different
  };

  // Don't render if not logged in
  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-8">Manage Users</h1>

      {/* Button to return to Admin Page */}
      <button
        onClick={handleReturnToAdminPage}
        className="mb-8 bg-green-600 p-3 rounded-lg hover:bg-green-500 transition-all"
      >
        Return to Admin Page
      </button>

      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-96 mb-8">
        <form onSubmit={handleAddUser} className="flex flex-col">
          <h2 className="text-lg font-bold mb-4">Add User</h2>
          <label className="mb-2 text-sm">Username</label>
          <input
            type="text"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            className="p-3 mb-4 bg-gray-700 rounded-lg"
            required
          />
          <label className="mb-2 text-sm">Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="p-3 mb-4 bg-gray-700 rounded-lg"
            required
          />
          {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}
          <button
            type="submit"
            className="bg-blue-600 p-3 rounded-lg hover:bg-blue-500 transition-all"
          >
            Add User
          </button>
        </form>
      </div>

      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4">Registered Users</h2>
        <ul>
          {users.map((user) => (
            <li
              key={user.id}
              className="flex justify-between items-center p-3 bg-gray-700 rounded-lg mb-3"
            >
              <span>{user.username}</span>
              <button
                onClick={() => deleteUser(user.id)}
                className="bg-red-600 px-3 py-1 rounded hover:bg-red-500 transition-all"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ManageUsersPage;
