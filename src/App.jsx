import { useState } from 'react'
import Header from './components/Header'
import BlogList from './components/BlogList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <BlogList />
    </>
  )
}

export default App
