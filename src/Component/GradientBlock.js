export default function GradientBlock({setLinearGradient}) {
  return(
    <div style={{width: "300px", height: "200px", background: `linear-gradient(${setLinearGradient})`}}>

    </div>
  )
}