import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
    const items = props.data;
    return (
        <Card>
            {items.length === 0 ? <h3>No Expense</h3> : items.map(el => <ExpenseItem item={el} />)}
        </Card>
    );
}

export default Expenses;