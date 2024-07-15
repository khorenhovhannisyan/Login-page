import { Outlet } from "react-router-dom"
import nostarted from "../../assets/icons/nostarted.png"
import pending from "../../assets/icons/pending.png"
import completed from "../../assets/icons/completed.png"
import "./LoginLayout.css"
export default function LoginLayout({comp}) {
 
  return (
    <main className='LoginLayout'>
    <div className='LoginLayout__body'>
       <Outlet/>
    </div>
    <div className='LoginLayout__nav'>
    
     <div className='LoginLayout__footer__detalis'>
      <div className="LoginLayout__icon">
       <img src={completed} alt="completed" />
      </div>
      <div className="LoginLayout__box">
        <h5 className="LoginLayout__box__top">Your details</h5>
        <p className="LoginLayout__box__bottom">Name and email</p>
      </div>
     </div>

     <div className='LoginLayout__footer__detalis'>
     <div className="LoginLayout__icon">
     <img src={comp?completed:pending} alt="pending" />
     </div>
      <div className="LoginLayout__box">
        <h5 className="LoginLayout__box__top">Choose a password</h5>
        <p className="LoginLayout__box__bottom">Choose a secure password</p>
      </div>
     </div>

     <div className='LoginLayout__footer__detalis'>
     <div className="LoginLayout__icon">
     <img src={comp?pending:nostarted} alt="nostarded" />
     </div>
      <div className="LoginLayout__box">
        <h5 className="LoginLayout__box__top">Invite your team</h5>
        <p className="LoginLayout__box__bottom">Start collaborating</p>
      </div>
     </div>

     <div className='LoginLayout__footer__detalis'>
     <div className="LoginLayout__icon">
     <img src={nostarted} alt="nostarded" />
     </div>
      <div className="LoginLayout__box">
        <h5 className="LoginLayout__box__top">Upload schools document</h5>
        <p className="LoginLayout__box__bottom">For account verification</p>
      </div>
     </div>
    </div>
    </main>
  )
}
