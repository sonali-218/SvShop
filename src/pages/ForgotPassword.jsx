import { useState } from "react"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import { ArrowLeftIcon } from "@heroicons/react/24/outline"

function ForgotPassword() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email) {
      toast.error("Ingresa tu correo electrónico")
      return
    }

    toast.success("Te enviamos un enlace para restablecer tu contraseña 📩")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F57656] p-8">

      <div className="w-full max-w-6xl bg-[#FDE4DD] rounded-3xl p-10 shadow-xl">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Formulario */}
          <div className="bg-[#FCD6CC] rounded-3xl p-10 shadow-lg">

            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-sm text-[#CB6045] mb-6 hover:underline"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              Volver al inicio de sesión
            </button>

            <p className="text-sm text-[#CB6045] mb-2">
              Recupera tu acceso
            </p>

            <h2 className="text-4xl font-bold text-black mb-6">
              ¿Olvidaste tu contraseña?
            </h2>

            <p className="text-gray-700 mb-8 text-sm">
              Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">

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

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-[#F57656]
                text-white font-semibold
                hover:bg-[#CB6045] transition"
              >
                Enviar enlace
              </button>

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

export default ForgotPassword