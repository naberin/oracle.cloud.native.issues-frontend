import React from "react";

const component = function(props) {

    let {
        issueTitle,
        issueType,
        issueStatus,
        issueId,
        issueBy,
        issueDate,
        issueTags
    } = props;

    let issueClassIcon = `icon-${issueType}`;
    let metadata = '';

    return (
        <div className="entry issue">
            <div className="flex flex-row">
                <div className={"icon type " + issueClassIcon}/>
                <div className="details flex flex-col">
                    <div className="title">{issueTitle}</div>
                    <div className="meta">{metadata}</div>
                </div>
            </div>
        </div>
    )
}
export default component;