import { useEffect } from "react"

function ChildComp(props) {
  useEffect(() => {
    return () => {
      console.log("Component Will unmount - ChildComp")
    }
  }, [])
  
  return (
    <h2>{props.text}</h2>
  )
}

export default ChildComp