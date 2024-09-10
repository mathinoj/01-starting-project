export default function TabButton({children, onSelect}){
  // export default function TabButton({label}){
    //children is a PROP provided by react and MUST be named as such

  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
    // <li><button>{label}</button></li>
  )
}