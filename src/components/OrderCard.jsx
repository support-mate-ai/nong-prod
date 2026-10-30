// "New order" card shown in the mock service-provider app.
export default function OrderCard({ heading = 'New order', sub, style, innerStyle }) {
  return (
    <div className="ord" style={style}>
      <div className="h">{heading}<span>Waiting for you</span></div>
      <h4>Haircut + beard trim</h4>
      {sub && <p>{sub}</p>}
      <div className="bt"><i>Cancel</i><i>Confirm</i></div>
    </div>
  )
}
