import React from "react";

import Select, { components } from "react-select";
import { TeachEmployes, groupedOptions } from "../data";

// react-select components:
// https://react-select.com/components
import "./styles.css";

const groupStyles = {
    background: "#151B54",
    color: "rgb(76, 154, 226)",
};

const Group = props => (
    <div style={groupStyles}>
        <components.Group {...props} />
    </div>
);

const responsiveClass = 'sm:max-w-30 lg:max-w-100 xl:max-w-124 max-w-136'

const Selector = () => (
    <div className={`${responsiveClass} w-124 mt-10`} >
        <div class='SelectEmpoloye'>Select Employes</div>
        <Select

            defaultValue={TeachEmployes[1]}
            options={groupedOptions}
            components={{ Group }}
            isMulti
            withAll={true}
        />
    </div>
);

export default Selector

