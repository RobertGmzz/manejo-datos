//import FormularioWhatsApp from "./components/clicktochat-whatsapp/form"
import { TodoApp } from "./components/crud-supabase/components/todo-list"

function App() {

  return (
    <div className="w-full h-screen bg-black text-white">
      {/* <FormularioWhatsApp /> */}
      <TodoApp />
    </div>
  )
}

export default App