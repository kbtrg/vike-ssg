import { useState } from "react"

const Wrapper: React.FC = ({ children }) => {
  const [num, setNum] = useState(0)

  return (
    <div>
      <button onClick={() => setNum(num + 1)}>
        Count: {num}
      </button>
      {children}
    </div>
  )
}

export default Wrapper