import axios from 'axios';

const Inventory = () => {

    const getInventory = () => {
        axios({
            method: 'get',
            url: "/inventory",
            headers: {
                'Content-Type': 'application/json',
              },
        })
        .then((response) => console.log("Reponse Status:", response.status, "Inventory", response.data))
        .catch(error => {
            console.log(error)
        });
    }

    const getBeverageInventory = (id) => {
        axios({
            method: 'get',
            url: `/inventory/${id}`,
            headers: {
                'Content-Type': 'application/json',
              },
        })
        .then((response) => console.log("Reponse Status:", response.status, "Remaining Beverage Quantity", response.data))
        .catch(error => {
            console.log(error)
        });
    }

    return (
        <div>
            <button onClick={getInventory}> Get All Inventory </button>
            <br/>
            <button onClick={() => getBeverageInventory(1)}> Remaining Beverage One Quantity </button>
            <button onClick={() => getBeverageInventory(2)}> Remaining Beverage Two Quantity </button>
            <button onClick={() => getBeverageInventory(3)}> Remaining Beverage Three Quantity </button>
        </div>
    )

}

export { Inventory };