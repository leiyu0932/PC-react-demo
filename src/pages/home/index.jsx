import { useState } from 'react'

function Home() {
  const [text, setText] = useState('首页')

  return (
    <div className="home">
      <h1>{text}</h1>
    </div>
  )
}

export default Home
