import { useEffect, useState } from "react";
import close_modal from "./Images/icon-close-modal.svg";
import "./Popup.css"

function Popup({setPopup, setSubmitted}) {

  const [radio, setRadio] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setPopup(false);
  }
  
  

  return (
    <div className="popup-container">
      <div className="popup-content">
        <div className="header">
          <img src={close_modal} onClick={() => setPopup(false)}/>
        </div>
          <div className="title">Back this project</div>
          <br />
          <div className="description">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</div>
          <br />
          <form className="popup-boxes" onSubmit={handleSubmit} >
            <div className="popup-box">
              <div className="popup-top">
                <input type="radio" name="radAnswer" value="first" onChange={(e) => setRadio(e.target.value)} />
                <div className="popup-text">
                  <div className="popup-box-header">
                    <div className="popup-box-inner-header">
                      <div className="popup-title">Pledge with no reward</div>
                    </div>
                    
                  </div>
                  <div className="description">Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</div>
                </div>
              </div>
              <div className={radio=="first" ? "popup-box-footer-active" : "popup-box-footer"}>
                <div className="description"></div>
                <div style={{display: "flex", gap: "15px", alignItems: "center"}}>
                  <button>Continue</button>
                </div>
              </div>
            </div>
            <div className="popup-box">
              <div className="popup-top">
                <input type="radio" name="radAnswer" value="second" onChange={(e) => setRadio(e.target.value)} />
                <div className="popup-text">
                  <div className="popup-box-header">
                    <div className="popup-box-inner-header">
                      <div className="popup-title">Bamboo Stand</div>
                      <div className="pledge">Pledge $25 or more</div>
                    </div>
                    <div className="popup-box-inner-header-number">
                      <div className="number">101</div>
                      <div className="description">left</div>
                    </div>
                  </div>
                  <div className="description">You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.</div>
                  <div  className="mobile-numbers">
                    <div className="number">101</div>
                    <div className="description">left</div>
                  </div>
                </div>
              </div>
              <div className={radio=="second" ? "popup-box-footer-active" : "popup-box-footer"}>
                <div className="description">Enter your pledge</div>
                <div style={{display: "flex", gap: "15px", alignItems: "center"}}>
                  <div className="input"> <div className="description">$</div> <input type="text" /></div>
                  <button>Continue</button>
                </div>
              </div>
            </div>
            <div className="popup-box">
              <div className="popup-top">
                <input type="radio" name="radAnswer" value="third" onChange={(e) => setRadio(e.target.value)} />
                <div className="popup-text">
                  <div className="popup-box-header">
                    <div className="popup-box-inner-header">
                      <div className="popup-title">Black Edition Stand</div>
                      <div className="pledge">Pledge $75 or more</div>
                    </div>
                    <div className="popup-box-inner-header-number">
                      <div className="number">64</div>
                      <div className="description">left</div>
                    </div>
                  </div>
                  <div className="description">You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.</div>
                  <div  className="mobile-numbers">
                    <div className="number">64</div>
                    <div className="description">left</div>
                  </div>
                </div>
              </div>
              <div className={radio=="third" ? "popup-box-footer-active" : "popup-box-footer"}>
                <div className="description">Enter your pledge</div>
                <div style={{display: "flex", gap: "15px", alignItems: "center"}}>
                  <div className="input"> <div className="description">$</div> <input type="text" /></div>
                  <button>Continue</button>
                </div>
              </div>
            </div>
            <div className="popup-box inactive">
              <div className="popup-top">
                <input type="radio" name="radAnswer" value="fourth" onChange={(e) => setRadio(e.target.value)} />
                <div className="popup-text">
                  <div className="popup-box-header">
                    <div className="popup-box-inner-header">
                      <div className="popup-title">Mahogany Special Edition</div>
                      <div className="pledge">Pledge $200 or more</div>
                    </div>
                    <div className="popup-box-inner-header-number">
                      <div className="number">0</div>
                      <div className="description">left</div>
                    </div>
                  </div>
                  <div className="description">You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</div>
                  <div  className="mobile-numbers">
                    <div className="number">0</div>
                    <div className="description">left</div>
                  </div>
                </div>
              </div>
              <div className={radio=="fourth" ? "popup-box-footer-active" : "popup-box-footer"}>
                <div className="description">Enter your pledge</div>
                <div style={{display: "flex", gap: "15px", alignItems: "center"}}>
                  <div className="input"> <div className="description">$</div> <input type="text" /></div>
                  <button disabled>Out of stock</button>
                </div>
              </div>
            </div>
          </form>
      </div>
    </div>
  )
}

export default Popup;


