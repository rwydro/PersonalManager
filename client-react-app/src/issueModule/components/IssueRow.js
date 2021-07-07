import React, {useState, useReducer} from "react";
import deepClassNames from "../../coreModule/helpers/deepClassNames";
import "./IssueRow.scss"
import Badge from "../../coreModule/components/Badges/Badge";
import DropDown from "../../coreModule/components/DropDown/DropDown";
import {DropDownType} from "../../coreModule/components/DropDown/DropDown";
import 'bootstrap/dist/css/bootstrap.min.css';
import issueState from "../../api/enums/issueState";


function init(data) {
    return {
        isVisible: false,
        assUser: data.assignedUser,
        status: data.status
    };
}

function reducer(state, action) {
    switch (action.type) {
        case 'setVisible':
            return {...state, isVisible: action.data};
        case 'setAssUser':
            return {...state, setAssUser: action.data};
        case 'setStatus':
            return {...state, setStatus: action.data};
        default:
            //throw new Error();
    }
}

const IssueRow = ({row, users}) => {
    // const [isVisible,setVisible] = useState(false);
    // const [assUser,setAssUser] = useState( row.assignedUser);
    // const [status,setStatus] = useState(false);
    const [state, dispatch] = useReducer(reducer, {assignedUser:row.assignedUser, status:row.state}, init);


    const rowClass = `issueRow ${deepClassNames({
        'issueRow': {
            '--clicked': state.isVisible,
        },
    })}`;

    const accordion = `accordion ${deepClassNames({
        'accordion': {
            '--visible': state.isVisible,
        },
    })}`;

    const mapDropDownVariant = () => {
        switch (row.state) {
            case issueState.Open:
                return DropDownType.primary;
            case issueState.InProgress:
                return DropDownType.warning;
            case issueState.Resolved:
                return DropDownType.info;
            case issueState.Closed:
                return DropDownType.success;
            case issueState.Verification:
                return DropDownType.danger;
        }
    };

    const onStateChange = (data)=>{
    };

    const onAssignedUserChange = (data)=>{

    };

    return (
        <>
            <tr className={rowClass} onClick={() => dispatch({type:"setVisible", data: !state.isVisible})}>
                <td>
                  <Badge text={row.tittle} variant={DropDownType.success}/>
                </td>
                <td>
                    <Badge variant={DropDownType.dark} text={row.author}/>
                </td>
                <td>
                    <DropDown elementsArray={Object.values(issueState)} variant={mapDropDownVariant()}
                              selectedState={row.state} onElementSelectedCallback={onStateChange}/>
                </td>
                <td>
                    <DropDown elementsArray={users.map(el => el.displayName)} variant={mapDropDownVariant()}
                              selectedState={row.assignedUser} onElementSelectedCallback={onAssignedUserChange}/>
                </td>
                <td>
                    <Badge text={row.deadLine} variant={DropDownType.danger}/>
                </td>
                <td>
                    <Badge text={row.createdDate} variant={DropDownType.warning}/>
                </td>
            </tr>
            <tr style={{display: `${state.isVisible ? 'contents' : 'none'}`}}>
                <td colSpan="4">
                    <div className={accordion}>
                        <p>{row.description}</p>
                    </div>
                </td>
            </tr>
        </>
    )
};

export default IssueRow