function Deposit(){
    const [show, setShow]       = React.useState(true);
    const [status, setStatus]   = React.useState('');


    return(
        <Card
            bgcolor="secondary"
            header="DEPOSIT"
            status={status}
            body={show ?
                <DepositForm setShow={setShow}/> :
                <DepositMsg setShow={setShow}/>}
        />
    )
}

function DepositMsg(props){
    return(<>
    <h5> Deposit Succcesful! </h5>
    <button type="submit"
    className="btn btn-light"
    onClick={() => props.setShow(true)}> Make another deposit </button>
    </>);
}

function DepositForm(props){
    const [deposit, setDeposit]   = React.useState('');
    const [balance, setBalance]   = React.useState('0');
    
    
function handle(){
    
    setBalance(Number(balance) + Number(deposit));
}

return (<>
    
    Deposit <br/>
    <input type="input"
    className="form-control"
    placeholder="Deposit amount"
    value={deposit}
    onChange={e => setDeposit(e.currentTarget.value)} /><br/>
    
    <h5> CURRENT BALANCE: ${balance} </h5> <br></br>
    
    <button type="submit"
    className="btn btn-light"
    onClick={handle}> Submit deposit </button>

    </>);
}