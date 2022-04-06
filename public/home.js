function Home(){
    return (
        <Card 
        bgcolor="secondary"
        txt color="black"
        header="BAD BANK"
        title="We welcome you to become a member of our banking family"
        text="Create an Account to get started"
        body={(<img src="cash.jpg" className="img-fluid" alt="Responsive image"/>)}
        />
    );
}