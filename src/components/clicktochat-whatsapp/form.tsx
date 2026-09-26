import { useState } from "react"
import { sendWhatsApp } from "./send-whatsApp"

export default function FormularioWhatsApp() {
  const [nombre, setNombre] = useState("")
  const [producto, setProducto] = useState("")
  const [precio, setPrecio] = useState("")
  const [telefono, setTelefono] = useState("")

  const handleSendWhatsApp = () => {
    const mensaje = `Hola ${nombre}

      Te contacto para compartirte la siguiente información:

      Producto: ${producto}
      Precio: $${precio}

      ¡Quedo atento/a a tu respuesta!`

    sendWhatsApp(telefono, mensaje)
  }

  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        type="text"
        placeholder="Producto"
        value={producto}
        onChange={(e) => setProducto(e.target.value)}
      />

      <input
        type="number"
        placeholder="Precio"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
      />

      <input
        type="tel"
        placeholder="Teléfono con código de país"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
      />

      <button onClick={handleSendWhatsApp}>
        Abrir WhatsApp
      </button>
    </div>
  )
}