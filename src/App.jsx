import NavBar from "./components/NavBar"
import Name from "./components/Name"
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="bg-beige h-screen w-screen overflow-hidden mb-96 ">
      <NavBar/>
      <Name/>
    </main>
  )
}

export default App
