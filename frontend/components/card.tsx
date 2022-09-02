import { FC, ReactNode} from "react"

const Card: FC<{
  children: ReactNode
}> = ({ children }) => {
  return (
    <button type="button" className="card">
      <div className="inner">
        {children}
      </div>
    </button>
  )
}

export default Card
