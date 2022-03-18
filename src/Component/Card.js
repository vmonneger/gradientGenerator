export default function Card(props) {
  
  return(
    <div className="card" style={{display: "flex", flexDirection: "column"}}>
      { props.children }
    </div>
  )
}