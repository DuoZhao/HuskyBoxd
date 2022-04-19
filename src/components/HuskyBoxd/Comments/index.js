import React from "react";
import CommentsComponents from "./CommentsComponents";

const Comments = () => {

    return (
        <div className="ms-4">
            <div style={{borderBottom: "1px solid #456", display: "center"}}>
                POPULAR REVIEWS THIS WEEK
            </div>
            <CommentsComponents/>
        </div>
    );
}
export default Comments;