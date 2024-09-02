import './NetBanking.css'
import bank from '../assets/bank.svg'

const NetBanking = () =>{
    return (
        <div className='net-banking'>
            <img src={bank} alt="" />
            <span className='nb-s-2'>
                <span className='bank-name'>
                    <span>Bank Name</span>
                    <input type="text" required/>
                </span>
                <span className='bank-account'>
                    <span>Account Number</span>
                    <input type="number" />
                </span>
                <span className='bank-account-password'>
                    <span>Password</span>
                    <input type="password" />
                </span>
                <span className="login-button">
                    <button>Login</button>
                </span>
            </span>
        </div>
    )
}

export default NetBanking;