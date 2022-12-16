

function Date(props) {
    return (
        <div className="bg-danger  border border-primary  rounded   m-2 p-2 text-center">
            <div className="h4">{props.date.getFullYear()}</div>
            <div className="lead">{props.date.toLocaleString('default', { month: 'short' }) + " " + props.date.getDate()}</div>
        </div>
    );
}

export default Date;