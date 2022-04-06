function Withdraw(){
    const [show, setShow]       = React.useState(true);
    const [status, setStatus]   = React.useState('');


    return(
        <Card
            bgcolor="secondary"
            header="WITHDRAW"
            status={status}
            body={show ?
                <WithdrawForm setShow={setShow}/> :
                <DepositMsg setShow={setShow}/>}
            />
    )
}

function WithdrawMsg(props){
    return(<>
    <h5> Withdrawal Succcesful! </h5>
    <button type="submit"
    className="btn btn-light"
    onClick={() => props.setShow(true)}> Make another withdrawal </button>
    </>);
}

function WithdrawForm(props){
    const [withdraw, setWithdraw]   = React.useState('');
    const [balance, setBalance]   = React.useState('0');
    
    
function handle(){
    
    setBalance(Number(balance) - Number(withdraw));
}

return (<>
    
    Withdraw <br/>
    <input type="input"
    className="form-control"
    placeholder="Withdrawal amount"
    value={withdraw}
    onChange={e => setWithdraw(e.currentTarget.value)} /><br/>
    
    <h5> CURRENT BALANCE: ${balance} </h5> <br></br>
    
    <button type="submit"
    className="btn btn-light"
    onClick={handle}> Submit withdrawal </button>

    </>);
}