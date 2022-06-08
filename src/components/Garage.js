import './Garage.css'
import CarsDate from "./CarsDate";

function Garage(props) {
    return (
        <div style={{
            border: 'solid 2px black',
            padding: '5px',
        }}>
            <CarsDate date={props.date}/>
            <div>
                <h2> {props.name} </h2>
                <div>${props.price} </div>
            </div>
        </div>
    )
}

export default Garage;