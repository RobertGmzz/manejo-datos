//import FormularioWhatsApp from "./components/clicktochat-whatsapp/form"
import { ConsultList } from "./components/consultas-supabase/components/consult-list"

function App() {

  return (
    <div className="w-full h-screen bg-black text-white">
      {/* <FormularioWhatsApp /> */}
      <ConsultList />
    </div>
  )
}

export default App