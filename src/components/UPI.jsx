import './UPI.css'
import upiqr from '../assets/upi-qr.png';

const UPI = () =>{
    return(
        <div className='upi-block'>
            <span className='upi-head'>Enter the UPI Id or scan the QR Code</span>
                <div className="upi-2">
                    <span className="upi-s-1">
                        <img className="upi-random-qr" src={upiqr} alt="" />
                    </span>
                    <span className="upi-s-2">
                        <label htmlFor="upiidinput">UPI Id --</label>
                        <input type="text" placeholder='randomid@upiid' id='upiidinput'/>
                        <button onClick=''>SUBMIT</button>
                    </span>
                </div>
        </div>
    )
}

export default UPI