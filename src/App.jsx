import { useState } from 'react'
import { BrowserRouter, Route , Routes , Link} from 'react-router-dom';
import CreditCard from './components/CreditCard'
import NetBanking from './components/NetBanking'
import UPI from './components/UPI'
import NotFound from './components/NotFound'
import './App.css'


function App() {
  const [active, setActive] = useState(1)

  
  return (
    <>

      {/* ------------ Browser Router --------------*/}
      <BrowserRouter>
        
        {/* ------------- Payment Form --------------*/}
        <div className="payment-form">

          {/* ----------------- Heading --------------- */}
          <div className="heading">
            <h2>Payment Method</h2>
          </div>
          
          {/* ---------- Payment Method -------------*/}
          <div className="payment-methods">
          
              {/* Credit Card */}
              <span>
                  <Link to="/">
                    <span className={(active==1)?'credit-card active':'credit-card'} onClick={() => setActive(1)}>Credit Card</span>
                  </Link>
              </span>

              {/* Upi */}
              <span>
                <Link to="/upi">
                  <span className={(active==2)?'upi active':'upi'}
                  onClick={() => setActive(2)}>UPI</span>
                </Link>
              </span>

              {/* Net Banking */}
              <span>
                  <Link to="/netbanking">
                    <span className={(active==3)?'active':''} onClick={ () => setActive(3)}>Net Banking</span>
                  </Link>
              </span>

        </div>


        {/* ------------ Routing   ----------- */}
        <div className='routing-box'>      
            <Routes>
                <Route path="/" element={<CreditCard/>} />
                <Route path="/netbanking" element={<NetBanking/>} />
                <Route path="/upi" element={<UPI/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </div>


      </div>
      </BrowserRouter>
    </>
  )
}

export default App
