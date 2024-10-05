// eslint-disable-next-line react/prop-types
const Button = ({children, width, type}) => {
  return (
    <button type={type} className={`px-7 py-4 text-xl font-bold text-center rounded-[10px] transition-all bg-secondary hover:bg-primary text-white ${width}`}>
      {children}
    </button>
  )
}

export default Button