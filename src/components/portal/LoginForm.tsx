import React, { useState } from "react";

interface LoginFormProps {
  onLoginSuccess: () => void;
  onLoginError: (error: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess, onLoginError }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    // Simulación de login
    setTimeout(() => {
      if (email === "demo@rubato.org" && password === "123456") {
        onLoginSuccess();
      } else {
        setError("Credenciales incorrectas");
        onLoginError("Credenciales incorrectas");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto bg-[#F8F4FC] p-8 rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-primary">Iniciar Sesión</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="w-full mb-3 px-4 py-2 border rounded"
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="w-full mb-3 px-4 py-2 border rounded"
        required
      />
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <button type="submit" className="bg-primary text-white px-4 py-2 rounded w-full" disabled={loading}>
        {loading ? "Ingresando..." : "Ingresar"}
      </button>
    </form>
  );
};

export default LoginForm;
