import { useState } from 'react'
import Header from './components/Header'
import BlogList from './components/BlogList'
import { Outlet } from "react-router-dom";
// import 'dotenv/config';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* <BlogList /> */}
    </>
  )
}

export default App
