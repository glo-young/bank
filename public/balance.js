function Balance(){
    const [show, setShow]   = React.useState(true);
    const [status, setStatus] = React.useState('');

    return(
        <Card
            bgcolor="secondary"
            header="BALANCE"
            status={status}
            body={show ?
                <BalanceForm setShow={setShow} setStatus={setStatus}/> :
                <BalanceMsg setShow={setShow} setStatus={setStatus}/>}
                />
                )
}

function BalanceMsg(props){
    return(<>
    <h5> BALANCE REVIEWED </h5>
    <button type="submit"
    className="btn btn-light"
    onClick={() => {
        props.setShow(true);
        props.setStatus('');}
        }> Check balance again </button>
    </>);
}
function BalanceForm(props){
    const [email, setEmail] = React.useState('');
    const [balance, setBalance]     = React.useState('');

function handle(){
    console.log(email);
    const url = `/account/findOne/${email}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.balance);
        props.setShow(false);
        props.setStatus(data.email + ' your balance is $' + data.balance);
    });
    console.log(user);
    props.setShow(false);
}

return (<>
    
    EMAIL <br/>
    <input type="input"
    className="form-control"
    placeholder="Enter email"
    value={email}
    onChange={e => setEmail(e.currentTarget.value)} /><br/>
    
    
    <button type="submit"
    className="btn btn-light"
    onClick={handle}> Check Balance </button>

    </>);
}