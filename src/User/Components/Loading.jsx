import { React, CSSProperties}  from 'react'
import FadeLoader from "react-spinners/FadeLoader";
export const Loading = () => {
  return (
  <>
<div className="flex justify-center items-center justify-center h-screen">
<FadeLoader color="#36d7b7" /> 
</div>
  
</>
  )
}
