import { useState } from "react"
import toast from "react-hot-toast"

const countries = [
  { name: "El Salvador", code: "+503" },
  { name: "Guatemala", code: "+502" },
  { name: "Honduras", code: "+504" },
  { name: "Costa Rica", code: "+506" },
  { name: "México", code: "+52" },
  { name: "Colombia", code: "+57" },
  { name: "España", code: "+34" },
  { name: "Estados Unidos", code: "+1" },
]

function Register() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    country: "",
    phone: "",
  })

  const selectedCountry = countries.find(
    (c) => c.name === form.country
  )

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.fullName || !form.email || !form.password || !form.country || !form.phone) {
      toast.error("Completa todos los campos")
      return
    }

    toast.success("Cuenta creada con éxito 🎉")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F57656] p-8">

      <div className="w-full max-w-6xl bg-[#FDE4DD] rounded-3xl p-10 shadow-xl">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Formulario */}
          <div className="bg-[#FCD6CC] rounded-3xl p-10 shadow-lg">

            <p className="text-sm text-[#CB6045] mb-2">
              Crea tu cuenta
            </p>

            <h2 className="text-4xl font-bold text-black mb-8">
              Regístrate
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">

              <Input label="Nombre completo" name="fullName" value={form.fullName} onChange={handleChange} />

              <Input label="Email" name="email" type="email" value={form.email} onChange={handleChange} />

              <Input label="Contraseña" name="password" type="password" value={form.password} onChange={handleChange} />

              {/* Country Dropdown */}
              <div>
                <label className="block text-sm text-[#5F6362] mb-2">
                  País
                </label>
                <select
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-100
                  focus:outline-none focus:ring-2 focus:ring-[#7FEEF0]"
                >
                  <option value="">Selecciona tu país</option>
                  {countries.map((country) => (
                    <option key={country.name} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Phone with dynamic prefix */}
              <div>
                <label className="block text-sm text-[#5F6362] mb-2">
                  Número de teléfono
                </label>

                <div className="flex">
                  <div className="px-4 py-3 bg-gray-200 rounded-l-lg text-gray-700 font-medium">
                    {selectedCountry ? selectedCountry.code : "+___"}
                  </div>

                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Tu número"
                    className="w-full px-4 py-3 rounded-r-lg bg-gray-100
                    focus:outline-none focus:ring-2 focus:ring-[#7FEEF0]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-[#F57656]
                text-white font-semibold
                hover:bg-[#CB6045] transition"
              >
                Crear cuenta
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

function Input({ label, name, type = "text", value, onChange }) {
  return (
    <div>
      <label className="block text-sm text-[#5F6362] mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-lg bg-gray-100
        focus:outline-none focus:ring-2 focus:ring-[#7FEEF0]"
      />
    </div>
  )
}

export default Register