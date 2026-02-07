import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";
import { AuthContext } from "../../context/AuthContext";
import { FaArrowLeft } from "react-icons/fa";

const LoginAsAdmin = () => {
  const { setLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      alert("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg-main)] px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-[var(--bg-surface)] rounded-2xl shadow-lg p-8"
      >
        <button
          type="button"
          onClick={() => navigate("/")}
          className="mt-4 bg-[var(--color-primary)] text-[var(--text-inverse)] font-medium py-3 rounded-full hover:bg-[var(--color-primary-hover)] transition w-[30%] mb-6 btn btn-sm"
        >
          <FaArrowLeft className="inline mr-2" />
          Back Home
        </button>
        <h1 className="text-3xl font-bold mb-6 text-[var(--text-main)] text-center">
          Admin Login
        </h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="text-[var(--text-main)] font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="admin@example.com"
              className="border border-[var(--border-color)] rounded-lg p-3 text-[var(--text-main)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[var(--text-main)] font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="********"
              className="border border-[var(--border-color)] rounded-lg p-3 text-[var(--text-main)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-[var(--color-primary)] text-[var(--text-inverse)] font-medium py-3 rounded-full hover:bg-[var(--color-primary-hover)] transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-muted mt-4 text-center">
          Only authorized personnel can access this area.
        </p>
      </motion.div>
    </div>
  );
};

export default LoginAsAdmin;
