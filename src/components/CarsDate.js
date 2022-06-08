function CarsDate(props) {

    const year = props.date.getFullYear();
    const month = props.date.getMonth();
    const day = props.date.getDate();

    return (
        <div>
            <span>{year}</span>
            <span>{month}</span>
            <span>{day}</span>
        </div>
    )
}

export default CarsDate;