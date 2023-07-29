export interface SkillProps {
  id: number
  name: string
  percentage: number
  handleHover: (item: number) => void
}

const Skill = ({ id, name, percentage, handleHover }: SkillProps) => {
  const handleTeste = (value: number) => {
    handleHover(value)
  }
  return (
    <li
      key={id}
      className="relative h-10 w-full"
      onMouseEnter={() => handleTeste(id)}
      onMouseLeave={() => handleTeste(0)}
    >
      <div className="flex">
        <span className="-translate-y-3">{name}</span>
        <span
          style={{ left: `${percentage - 2}%`, bottom: '5px' }}
          className="absolute -translate-y-3"
        >
          {percentage}%
        </span>
      </div>
      <div
        style={{ width: `${percentage}%` }}
        className="absolute bottom-1 left-1 z-10 h-2 rounded-md bg-gradient-to-r from-skillBarActiveGradientStart from-10% to-skillBarActiveGradientEnd to-65%"
      ></div>
      <div className="absolute bottom-0 z-0 h-4 w-full rounded-md bg-gradient-to-t from-skillBarGradientStart to-skillBarGradientEnd"></div>
    </li>
  )
}

export default Skill
