import React from 'react'
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <TypeAnimation
    sequence={[
      "Hey! I'm Karla 👋",
      1000,
      "Hey! I'm turning data into insights 📊",
      500,
      "Hey! I'm crafting beautiful web experiences 💻",
      500,
    ]}
      speed={50}
      style={{ fontSize: "2em" }}
      repeat={Infinity}
    />
  )
}
