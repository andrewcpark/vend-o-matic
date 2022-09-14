import axios from 'axios';

const Beverages = () => {

    const buyBeverage = (id) => {
        axios({
            method: 'put',
            url: `http://localhost:3000/inventory/${id}`,
            headers: {
                'Content-Type': 'application/json',
              },
        })
        .then((response) => console.log("Reponse Status:", response.status, 
        "X-Coins: ", response.headers['x-coins'] - 2, 
        "X-Inventory: ", response.headers['x-inventory'], response.data))
        .catch(err => {
            console.error(err.response.data, err.response.status)
        });
    }

    return (
        <div>
            <button onClick={() => buyBeverage(1)}> Purchase Beverage 1 </button>
            <button onClick={() => buyBeverage(2)}> Purchase Beverage 2 </button>
            <button onClick={() => buyBeverage(3)}> Purchase Beverage 3 </button>
        </div>
    )

}

export { Beverages };