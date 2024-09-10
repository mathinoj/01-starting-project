export default function TabButton({children}){
  // export default function TabButton({label}){
    function handleClick(){
      console.log("herro");
    }

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
    // <li><button>{label}</button></li>
  )
}