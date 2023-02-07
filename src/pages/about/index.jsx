import { useState } from 'react'

function About() {
  const [text, setText] = useState('关于我们')

  return (
    <div className="about">
      <h1>{text}</h1>
    </div>
  )
}

export default About
