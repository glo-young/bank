function Deposit(){
    const [show, setShow]       = React.useState(true);
    const [status, setStatus]   = React.useState('');


    return(
        <Card
            bgcolor="secondary"
            header="DEPOSIT"
            status={status}
            body={show ?
                <DepositForm setShow={setShow} setStatus={setStatus}/> :
                <DepositMsg setShow={setShow} setStatus={setStatus}/>}
        />
    )
}

function DepositMsg(props){
    return(<>
    <h5> Deposit Succcesful! </h5>
    <button type="submit"
    className="btn btn-light"
    onClick={() => {
        props.setShow(true);
        props.setStatus('');}
        }> Make another deposit </button>
    </>);
}

function DepositForm(props){
    const [amount, setAmount]   = React.useState('');
    const [email, setEmail]     = React.useState('');


function handle() {
    console.log(email, amount);

    const url = `/account/update/${email}/${amount}`;
     (async () => {
        var res = await fetch(url);
        var data = await res.json();
        console.log('data ' + JSON.stringify(data));
        })();
        props.setShow(false);

    if (!user) {
        props.setStatus('Error');
    }
}

return (<>
    
    Email address <br/>
    <input type="input"
    className="form-control"
    placeholder="Enter email"
    value={email}
    onChange={e => setEmail(e.currentTarget.value)} /><br/>
    
    Deposit <br/>
    <input type="number"
    className="form-control"
    placeholder="Deposit amount"
    value={amount}
    onChange={e => setAmount(e.currentTarget.value)} /><br/>

    
    <button type="submit"
    className="btn btn-light"
    onClick={handle}> Submit deposit </button>

    </>);
}