import React, { useState } from "react"

const Home = () => {
  const [checked1, setChecked1] = useState(false)
  const [checked2, setChecked2] = useState(false)

  const handleChange1 = () => {
    setChecked1(!checked1)
  }

  const handleChange2 = () => {
    setChecked2(!checked2)
  }

  const Checkbox = ({ label, value, onChange }) => {
    return (
      <label>
        <input type="checkbox" checked={value} onChange={onChange} />
        {label}
      </label>
    )
  }

  return (
    <div>
      <h2>Pick your Protein</h2>
      <Checkbox label="Beef" value={checked1} onChange={handleChange1} />
      <br />
      <Checkbox label="Chicken" value={checked2} onChange={handleChange2} />
    </div>
  )
}

export default Home
