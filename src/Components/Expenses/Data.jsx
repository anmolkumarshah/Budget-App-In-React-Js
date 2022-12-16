function Data(props) {
    return (
        <div className="m-2">
            <div className="h3">{props.name}</div>
            <div className="h6">{"$ " + props.amount}</div>
        </div>
    );
}

export default Data;