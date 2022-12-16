import Data from "./Data";
import Date from "./Date";

function ExpenseItem(props) {
    const itemDate = props.item.date;
    return (
        <div className="card m-2">
            <div key={props.item.id} className="row">
                <div className="col-md-2">
                    <Date date={itemDate} />
                </div>
                <div className="col-md-10">
                    <Data name={props.item.name} amount={props.item.amount} />
                </div>
            </div>
        </div>
    );
}

export default ExpenseItem;