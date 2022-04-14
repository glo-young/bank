function Withdraw(){
    const [show, setShow]       = React.useState(true);
    const [status, setStatus]   = React.useState('');


    return(
        <Card
            bgcolor="secondary"
            header="WITHDRAW"
            status={status}
            body={show ?
                <WithdrawForm setShow={setShow} setStatus={setStatus}/> :
                <WithdrawMsg setShow={setShow} setStatus={setStatus}/>}
            />
    )
}

function WithdrawMsg(props){
    return(<>
    <h5> Withdrawal Succcesful! </h5>
    <button type="submit"
    className="btn btn-light"
    onClick={() => {
        props.setShow(true);
        props.setStatus('');}
        }> Make another withdrawal </button>
    </>);
}

function WithdrawForm(props){
    const [email,setEmail]   = React.useState('');
    const [amount,setAmount]   = React.useState('');
    
    

    function handle() {
        console.log(email, amount);
    
        const url = `/account/update/${email}/-${amount}`;
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

    Withdraw <br/>
    <input type="number"
    className="form-control"
    placeholder="Withdrawal amount"
    value={amount}
    onChange={e => setAmount(e.currentTarget.value)} /><br/>
    
    
    <button type="submit"
    className="btn btn-light"
    onClick={handle}> Submit withdrawal </button>

    </>);
}