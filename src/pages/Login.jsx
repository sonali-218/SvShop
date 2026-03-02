import { useState } from "react"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline"

function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email || !password) {
      toast.error("Completa todos los campos")
      return
    }

    toast.success("Bienvenida a SVShop ✨")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F57656] p-8">

      <div className="w-full max-w-6xl bg-[#FDE4DD] rounded-3xl p-10 shadow-xl">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Formulario */}
          <div className="bg-[#FCD6CC] rounded-3xl p-10 shadow-lg">

            <p className="text-sm text-[#CB6045] mb-2">
              ¡Bienvenido!
            </p>

            <h2 className="text-4xl font-bold text-black mb-8">
              Inicia sesión
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Email */}
              <div>
                <label className="block text-sm text-[#5F6362] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="usuario@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-gray-100
                  focus:outline-none focus:ring-2 focus:ring-[#7FEEF0]"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm text-[#5F6362] mb-2">
                  Password
                </label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 pr-12 rounded-lg bg-gray-100
                    focus:outline-none focus:ring-2 focus:ring-[#7FEEF0]"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center
                    text-gray-400 hover:text-[#CB6045] transition"
                  >
                    {showPassword ? (
                      <EyeSlashIcon className="h-5 w-5" />
                    ) : (
                      <EyeIcon className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

            {/* Forgot password */}
            <div
            onClick={() => navigate("/forgot-password")}
            className="text-right text-sm text-[#A04A34] cursor-pointer hover:underline"
            >
            ¿Olvidaste la contraseña?
            </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-[#F57656]
                text-white font-semibold
                hover:bg-[#CB6045] transition"
              >
                Iniciar sesión
              </button>

              {/* Register link */}
              <p className="text-center text-sm text-gray-700 mt-6">
                No tienes una cuenta aún?{" "}
                <span
                  onClick={() => navigate("/register")}
                  className="text-[#CB6045] font-semibold cursor-pointer hover:underline"
                >
                  Regístrate aquí
                </span>
              </p>

            </form>
          </div>

          {/* Logo */}
          <div className="flex justify-center">
            <img
              src="/svshop-logo.png"
              alt="SVShop Logo"
              className="w-96 object-contain"
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login