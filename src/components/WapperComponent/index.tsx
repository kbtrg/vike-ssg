import { useEffect, useState } from "react"

const WrapperComponent: React.FC = ({ children }) => {
  const [num, setNum] = useState(0)

  useEffect(() => {
    window.scrollBy({ top: 100 })
  }, [num])

  return (
    <div>
      <button onClick={() => setNum(num + 1)}>
        Count: {num}, 押すと下にスクロールするよ
      </button>
      {children}
      <div style={{ height: "2000px", backgroundColor: "red" }} >dummy</div>
    </div>
  )
}

export default WrapperComponent