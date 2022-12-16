import { useState } from "react";

function Filter(props) {

    const [displayText, setDisplayText] = useState(props.selectedFilter)

    function handleFilterChange(e) {
        let val = e.target.value;
        if (val === "all") {
            setDisplayText("All Value");
            props.onFilterChange("all");
        } else {
            let selectedValue = Number.parseInt(e.target.value);
            setDisplayText(selectedValue);
            props.onFilterChange(selectedValue);
        }
    }

    return (
        <div>
            <div className="row"><h4>Selected Filter :  {displayText}</h4></div>
            <div className="row">
                <select value={displayText} onChange={handleFilterChange} className="form-control" >
                    <option value="all">All Values</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
            </div>
        </div>
    );
}

export default Filter;