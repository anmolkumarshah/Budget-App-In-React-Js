import "./Bar.css";

function Bar(props) {
    return (
        <div class="col-1 bar">
            <div class="progress">
                <div class="progress-bar" role="progressbar" style={{ width: `${props.value}%` }} aria-valuenow="50" aria-valuemin="0"
                    aria-valuemax="100"></div>
            </div>
            <h5>{props.label}</h5>
        </div>
    );
}

export default Bar;