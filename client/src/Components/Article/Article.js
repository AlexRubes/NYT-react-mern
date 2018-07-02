import React from 'react';

//the same as passing in props so u would have to call props._id but in this case you can just pull in _id, this is called destructuring props
const Article = ({ title, url, _id, date, handleClick, buttonText, saved }) => (
    <div>
        <em>{title}</em>
        <button onClick={() => handleClick(_id)}>
            { buttonText }
        </button>
    </div>
);

export default Article;