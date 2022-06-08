import Garage from "./Garage";

function GarageList(props) {
    return (
        <div>
            <Garage name={props.garage[0].name} date={props.garage[0].date} price={props.garage[0].price}></Garage>
            <Garage name={props.garage[1].name} date={props.garage[1].date} price={props.garage[1].price}></Garage>
            <Garage name={props.garage[2].name} date={props.garage[2].date} price={props.garage[2].price}></Garage>
        </div>
    )
}

export default GarageList;