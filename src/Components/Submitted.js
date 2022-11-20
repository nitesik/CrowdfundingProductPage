import "./Submitted.css"
import check from "./Images/icon-check.svg"

function Submitted({setSubmitted}) {

  return (
    <div className="submitted-container">
      <div className="inner-submitted">
        <img src={check} />
        <div className="title">Thanks for your support!</div>
        <div className="description">Thanks for your support! Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</div>
        <button onClick={() => setSubmitted(false)}>Got it!</button>
      </div>
    </div>
  )
}

export default Submitted;