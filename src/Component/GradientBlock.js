export default function GradientBlock({setLinearGradient}) {
  return(
    <div style={{height: "200px", background: `linear-gradient(${setLinearGradient})`}}></div>
  )
}