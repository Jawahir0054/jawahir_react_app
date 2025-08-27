function Dashboard({isLoggedIn}) {
    return (
        <div>
            {isLoggedIn ? <p>You are in!</p> : <p>Please log in.</p>}
            {isLoggedIn ? <p>yes true</p>   : <p>no false</p>}
        </div>
    );
}

export default Dashboard;