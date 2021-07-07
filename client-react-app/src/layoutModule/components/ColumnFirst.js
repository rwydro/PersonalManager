import React from "react";
import "./ColumnFirst.scss";
import Avatar from "coreModule/components/Avatar/Avatar";
import createNameInitials from "coreModule/helpers/nameInitials";
import  Task from "resources/images/task.svg"
import Button from "coreModule/components/Button/Button";

const ColumnFirst = ({onClickIssuesButton}) => {

    return (
        <div className="column-first  col-auto h-100 " style={{width: '120px'}}>
                    <div className="flex-lg-wrap column-first__first-part border-bottom">
                        <Avatar initials={createNameInitials('Radosław Wydro')}/>
                        <p className="mt-2 text-center fw-bold">Radoslaw Wydro</p>
                    </div>
            <div className="d-flex flex-column align-items-center  column-first__second-part flex-lg-wrap">

                <Button onClick={() => onClickIssuesButton()} text="Lista zadań">
                    <img src={Task}/>
                </Button>
                <Button text="Lista zadań">
                    <img src={Task}/>
                </Button>
            </div>
        </div>
    )
};

export default ColumnFirst;