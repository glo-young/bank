function Spa(){
    return (
        <HashRouter>
            <div>
        <NavBar/>
        <UserContext.Provider value={{users: [{name:'abel', email: 'abel@mit.edu',password:'secret', balance:100}]}}>

        <div className="container" style={{padding: "20px"}}>
        <Route path="/" exact component={Home} />
        <Route path="/login/" component={Login} />
        <Route path="/deposit/" component={Deposit} />
        <Route path="/withdraw/" component={Withdraw} />
        <Route path="/alldata/" component={AllData} />
        <Route path="/createaccount/" component={CreateAccount} />
        </div>
        </UserContext.Provider>
        </div>
        </HashRouter>
    )
}

ReactDOM.render(<Spa/>,
    document.getElementById('root'));