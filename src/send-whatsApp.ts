export function sendWhatsApp( telefono: string, mensaje: string ): void {
  // Eliminar espacios, guiones, paréntesis, etc.
  const numeroLimpio = telefono.replace(/\D/g, "")

  // Codificar el mensaje para que sea válido en una URL
  const mensajeCodificado = encodeURIComponent(mensaje)

  const url = `https://wa.me/${numeroLimpio}?text=${mensajeCodificado}`

  window.open(url, "_blank", "noopener,noreferrer")
}