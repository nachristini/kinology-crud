export default function LoaderGrid(){
  return (
    <div className="grid">
      {Array.from({length:8}).map((_,i)=>(
        <div className="card" key={i}>
          <div className="skeleton skeleton-img"/>
          <div className="skeleton skeleton-text"/>
        </div>
      ))}
    </div>
  )
}
