import { Coins }  from './components/coins.jsx';
import { Beverages }  from './components/beverages.jsx';
import { Inventory }  from './components/Inventory.jsx';


const App = () => {
    return (
        <div>
            <h1> Vend-O-Matic </h1>
            <a href="https://github.com/andrewcpark/vend-o-matic"> <button> GITHUB REPO </button> </a>
            <p>Response Headers are logged to the console.</p>
            <Coins/>
            <Inventory/>
            <Beverages/>
        </div>
    )
};

export default App;