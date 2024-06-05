import './CreditCard.css'

const CreditCard = () =>{
    return (
    <>
        {/* ------ Card-Owner-Name -------*/}
        <div className='Card-Owner-Name'>
            <label htmlFor="CardOwnerName">Card Owner</label>
            <input type="text" name="" id="CardOwnerName" placeholder='Card Owner Name'/>
        </div>

        {/* ------- Card-Owner-Number -------*/}
        <div className='Card-Owner-Number'>
            <label htmlFor="">Card Number</label>
            <input type="text" name='' id="CardOwnerNumber" placeholder='Valid card number'/>
        </div>

        {/* ------- Date-and-Cvv --------*/}
        <div className='date-and-cvv'>
            <span>
                <label htmlFor="" className="ExpirationDate">Expiration Date</label>
                <input type="text" placeholder='MM'/>
                <input type="text" placeholder='YY'/>
            </span>

            <span>
                <label htmlFor="CVV">CVV</label>
                <input type="text" placeholder='CVV'/>
            </span>
        </div>

        {/* ------- Confirm Payment --------*/}
        <div className='confirm-payment'>
            <button id='confirm-payment'>Confirm Payment</button>
        </div>
    </>
    )
}

export default CreditCard;