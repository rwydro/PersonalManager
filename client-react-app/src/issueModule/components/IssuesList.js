import React , {useState} from "react";
import deepClassNames from "coreModule/helpers/deepClassNames";
import Table from "react-bootstrap/Table";

import "./IssuesList.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import IssueRow from "./IssueRow";


const IssuesList = ({issueList, text, users}) => {

    if(!issueList){
        return null;
    }

    const issueWrapper = deepClassNames();

    return (

        <div id="issueWrapperWithBorder" className="mt-5 d-flex justify-content-center
         position-relative pt-3 border-info border-top">
            <div style={{top: "-1vh"}}
               className="position-absolute  w-25 d-flex justify-content-center">
               <p >{text}</p>
           </div>

            <div id="issueList" className="w-100 overflow-auto" style={{height: "270px"}} >
                <div className="table-responsive">
                    <Table responsive="xl" style={{color:"#0dcaf"}}
                           striped class="mt-2 table table-striped table-bordered table-sm">
                        <thead>
                        <tr>
                            <th>Tytuł</th>
                            <th>Autor</th>
                            <th>Status</th>
                            <th>Osoba przypisana</th>
                            <th>Data zakończenia</th>
                            <th>Data utworzenia</th>
                        </tr>
                        </thead>
                        <tbody >
                            {issueList.map(el => {
                                return <IssueRow users={users} row={el} key={Math.ceil(Math.random()* 2000)} />
                            })}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
};

export default IssuesList;