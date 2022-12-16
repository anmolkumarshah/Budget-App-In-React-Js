import Bar from "./Bar";
import "./Bar.css";

function Chart(props) {
    const data = {
        Jan: 0,
        Feb: 0,
        Mar: 0,
        Apr: 0,
        May: 0,
        Jun: 0,
        Jul: 0,
        Aug: 0,
        Sept: 0,
        Oct: 0,
        Nov: 0,
        Dec: 0,
    };

    function getMonth(ele) {
        return ele.toLocaleString('default', { month: 'short' });
    }

    let totalAmount = 0;
    props.data.forEach(e => totalAmount += e.amount);

    props.data.forEach(e => {
        data[getMonth(e.date)] += e.amount;
    });

    for (let key in data) {
        data[key] = Math.round(data[key] / totalAmount * 100);
    }

    let listToShow = [];

    for (let key in data) {
        listToShow.push(<Bar label={key} value={data[key]} />);
    }


    console.log(props.data);
    console.log(data);
    console.log(totalAmount);

    return (
        <div className="container">
            <div className="row p-5">
                {listToShow}
            </div>
        </div>
    );
}

export default Chart;