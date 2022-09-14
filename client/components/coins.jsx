import axios from 'axios';

const Coins = () => {

    const addCoin = () => {
        axios({
            method: 'put',
            url: "http://localhost:3000/",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': 'true'
              },
            data: {
                coin: 1
            }
        })
        .then((response) => console.log("Reponse Status:", response.status, "X-Coins: ", response.headers['x-coins']))
        .catch(error => {
            console.log(error)
        });
    }

    const deleteCoin = () => {
        axios({
            method: 'delete',
            url: "http://localhost:3000/",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': 'true'
              },
        })
        .then((response) => console.log("Reponse Status:", response.status, "X-Coins: ", response.headers['x-coins']))
        .catch(error => {
            console.log(error)
        });
    }

    return (
        <div>
            <button onClick={addCoin}> Insert One Coin </button>
            <button onClick={deleteCoin}> Delete Coins </button>
        </div>
    )

}

export { Coins };