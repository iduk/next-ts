export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return <LoadingSkeleton />
}

function LoadingSkeleton() {
  return (
    <div className="card loading">
      <div className="content">
        <h4></h4>
        <div className="description"></div>
      </div>  
    </div>
  )
}
