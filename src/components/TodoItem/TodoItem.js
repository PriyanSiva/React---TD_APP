import React from 'react'

import { List, ListItem, ListItemText } from '@material-ui/core'

import './TodoItem.css';

function TodoItem(props) {
    return (
        <List className="todoItem__list">
            <ListItem>
                <ListItemText primary={props.text} secondary="Dummy Line"></ListItemText>
            </ListItem>
        </List>
    )
}

export default TodoItem
