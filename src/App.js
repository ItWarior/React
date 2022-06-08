import GarageList from "./components/GarageList";

function App() {
    const garage = [{
        name: 'BMV',
        date: new Date(2000, 12, 30),
        price: 2200
    }, {
        name: 'Audi',
        date: new Date(2015, 10, 5),
        price: 2200
    }, {
        name: 'Subaru',
        date: new Date(2020, 1, 10),
        price: 2200
    }]
    return (
        <div className="App">
            <GarageList garage={garage}/>
        </div>
    );
}

export default App;
