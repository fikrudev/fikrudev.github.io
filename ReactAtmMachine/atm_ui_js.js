//simple js
const AMTDeposit = ({onChange}) =>{
    return(
        <label className="amount">Deposit: {accounState}
        </label>
    );
};

const Account = () =>{
    const [accounState, setAcctState] = React.useState(0);
    const handleChange = evt =>{
        accounState += setAcctState (evt.targe.value);
        return accounState;
    }

    const handleSubmit = (e) =>{
        alert(`Total Account Balance ${accounState}`);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="number" onChange={handleChange}/>
            <h2 id="total">Account Balance $00.00</h2>
            <AMTDeposit onChange={onChange}></AMTDeposit>
        </form>
    )
}
ReactDOM.render(<Account/>,document.getElementById("root"));