import React from 'react';

const TodoLists = (props) => {

    return (
    <div className = "todo__style">
        <i className = "fa fa-times" area-hidden = "true" 
            onClick = {() => {
                return props.onSelect(props.id)
            }}
        />
        <li>{props.text}</li>
    </div>
    )
};

export default TodoLists;