import React from "react";

import { DatePicker } from "@y0c/react-datepicker";
// import calendar style
// You can customize style by copying asset folder.
import "@y0c/react-datepicker/assets/styles/calendar.scss";

// Please include the locale you want to use.
// and delivery props to calendar component
import "./styles.css";
import "dayjs/locale/en"

const Panel = ({ header, children }) => (
    <div style={{ height: "300px" }}>
        <h1>{header}</h1>
        <div>{children}</div>
    </div>
);

const responsiveClass = 'sm:max-w-30 lg:max-w-100 xl:max-w-124 max-w-136'

function DateS() {
    const onChange = title => (...args) => console.log(title, args);
    return (
        <div className={`${responsiveClass} w-124 mt-18 `}>
            <div class='DateSelect'>Date Picker</div>
            <Panel>
                <div><h1>Select Date</h1></div>
                <DatePicker
                    showToday
                    onChange={onChange("DatePicker")}
                />
            </Panel>

        </div>
    );
}
export default DateS;