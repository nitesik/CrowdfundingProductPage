import { useState, useEffect } from "react";
import "./Home.css";
import Navbar from "./Navbar";
import Submitted from "./Submitted";
import logo from "./Images/logo-mastercraft.svg";
import bookmark from "./Images/icon-bookmark.svg";
import bookmarked_icon from "./Images/icon-bookmarked.svg";
import Popup from "./Popup";


function Home() {

  const [bookmarked, setBookmarked] = useState(false);
  const [popup, setPopup] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  function getWidth() {
    setWidth(window.innerWidth);
  }
  
  useEffect(() => {
    
    window.addEventListener("resize", getWidth);
  }, [width]);
  
  return (
    <div className="container">
      <Navbar width={width} />
      {popup ? <Popup setPopup={setPopup} setSubmitted={setSubmitted} /> : null}
      {submitted ? <Submitted setSubmitted={setSubmitted} /> : null}
      <div className="content">
        <div className="first-block">
          <img src={logo} alt="logo" className="logo" />
          <div className="title">Mastercraft Bamboo Monitor Riser</div>
          <div className="description">A beautiful & handcrafted stand to reduce neck and eye strain.</div>
          <div className="first-block-buttons">
            <button onClick={() => setPopup(!popup)}>Back this project</button>
            <div onClick={() => setBookmarked(!bookmarked)} className={`${bookmarked ? "bookmarked" : ""}`}>
              <img src={bookmarked ? bookmarked_icon : bookmark} />
              <div className="bookmark">{bookmarked ? "Bookmarked" : "Bookmark"}</div>
            </div>
          </div>
        </div>
        <div className="second-block">
          <div className="stats">
            <div>
              <div className="numbers">$89,914</div>
              <div className="description">of $100,000 backed</div>
            </div>
            <hr />
            <div className="middle-stat">
              <div className="numbers">5,007</div>
              <div className="description">total backers</div>
            </div>
            <hr />
            <div>
              <div className="numbers">56</div>
              <div className="description">days left</div>
            </div>
          </div>
          <div className="bar">
            <div className="inner-bar"></div>
          </div>
        </div>
        <form onSubmit={(e) => {e.preventDefault(); setSubmitted(true)}} className="third-block">
          <div className="inner-third-block">
            <div className="third-block-title">About this project</div>
            <br />
            <div className="description">The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</div>
            <br />
            <div className="description">Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</div>
            <br />
            <div className="third-block-boxes">
              <div className="box">
                <div className="box-title">
                  <div className="third-block-title">Bamboo Stand</div>
                  <div className="pledge" onClick={() => setPopup(true)}>Pledge $25 or more</div>
                </div>
                <div className="description">You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.</div>
                <div className="box-footer">
                  <div className="left">
                    <div className="numbers">101</div>
                    <div className="description">left</div>
                  </div>
                  <button type="submit">Select Reward</button>
                </div>
              </div>
              <div className="box">
                <div className="box-title">
                  <div className="third-block-title">Black Edition Stand</div>
                  <div className="pledge" onClick={() => setPopup(true)}>Pledge $75 or more</div>
                </div>
                <div className="description">You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.</div>
                <div className="box-footer">
                  <div className="left">
                    <div className="numbers">64</div>
                    <div className="description">left</div>
                  </div>
                  <button type="submit">Select Reward</button>
                </div>
              </div>
              <div className="box inactive">
                <div className="box-title">
                  <div className="third-block-title">Mahogany Special Edition</div>
                  <div className="pledge" onClick={() => setPopup(true)}>Pledge $200 or more</div>
                </div>
                <div className="description">You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.</div>
                <div className="box-footer">
                  <div className="left">
                    <div className="numbers">0</div>
                    <div className="description">left</div>
                  </div>
                  <button type="submit" disabled>Out of stock</button>
                </div>
              </div>
            </div>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Home;