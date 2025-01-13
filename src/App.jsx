import NavBar from "./components/NavBar"
import Name from "./components/Name"
import { useEffect } from "react";
import TestName from "./components/TestName";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="bg-beige h-screen w-screen overflow-hidden mb-96 ">
      <NavBar/>
      <Name/>
      {/* <TestName/> */}
    </main>
  )
}

export default App
