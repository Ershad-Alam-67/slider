import React, { useContext, createContext, useEffect, useState } from "react"

export const MyContext = createContext()

const MyContextProvider = (props) => {
  const [images, setImages] = useState([])
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Ershad-Alam-67/static-files/main/output.json"
    )
      .then((res) => res.json())
      .then(async (data) => {
        console.log(data.img1)
        setImages([data.img1, data.img2])
      })
  }, [])
  return (
    <MyContext.Provider value={{ images }}>{props.children}</MyContext.Provider>
  )
}

export default MyContextProvider
