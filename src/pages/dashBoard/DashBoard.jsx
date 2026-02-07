import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { loading, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner loading-lg text-black"></span>
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-5">
      {/* Header */}
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-gray-500 mt-2">
            Manage your portfolio content from here
          </p>
        </div>
        <div>
          <button onClick={handleLogout} className="btn btn-outline btn-error">
            Logout
          </button>
        </div>
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div
          onClick={() => navigate("/dashboard/add-project")}
          className="cursor-pointer p-8 rounded-xl border hover:border-primary hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">➕ Add Project</h2>
          <p className="text-gray-500">Add a new project to your portfolio</p>
        </div>

        <div
          onClick={() => navigate("/dashboard/add-blog")}
          className="cursor-pointer p-8 rounded-xl border hover:border-primary hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">✍️ Add Blog</h2>
          <p className="text-gray-500">Publish a new blog article</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl bg-base-200">
          <h3 className="text-sm text-gray-500">Total Projects</h3>
          <p className="text-3xl font-bold mt-2">0</p>
        </div>

        <div className="p-6 rounded-xl bg-base-200">
          <h3 className="text-sm text-gray-500">Total Blogs</h3>
          <p className="text-3xl font-bold mt-2">0</p>
        </div>

        <div className="p-6 rounded-xl bg-base-200">
          <h3 className="text-sm text-gray-500">Messages</h3>
          <p className="text-3xl font-bold mt-2">0</p>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
