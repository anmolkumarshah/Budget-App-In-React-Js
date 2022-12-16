import { useState } from "react";
import Card from "../UI/Card";

const ExpenseForm = (props) => {

    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleAmountChange(e) {
        setAmount(e.target.value);
    }

    function handleDateChange(e) {
        setDate(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        let preparedData = {
            name: name,
            amount: Number.parseInt(amount),
            date: new Date(date),
        };
        console.log(preparedData);

        setAmount("");
        setName("");
        setDate("");

        props.onNewExpenseSubmit(preparedData);
    }

    return (
        <Card>
            <form onSubmit={handleSubmit} className="rounded" >
                <div className="form-group">
                    <input placeholder="Name" value={name} onChange={handleNameChange} type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <input placeholder="Amount" value={amount} onChange={handleAmountChange} type="number" className="form-control" />
                </div>

                <div className="form-group">
                    <input placeholder="Date" value={date} onChange={handleDateChange} type="date" className="form-control" />
                </div>

                <button className="btn btn-warning">Add Event</button>
            </form>
        </Card>
    );
}

export default ExpenseForm;