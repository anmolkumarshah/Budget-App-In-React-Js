function Card(props) {
    return (
        <div className="container rounded my-2 p-4 bg-info " >
            {props.children}
        </div>
    );
}


export default Card;