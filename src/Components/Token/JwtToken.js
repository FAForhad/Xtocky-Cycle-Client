export const JwtToken = (user) => {
    const currentUser = {
        email: user.email
    }

    console.log(user)
    fetch('https://xtocky-cycle-server.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('Token', data.Token)
        })
}