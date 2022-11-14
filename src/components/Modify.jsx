import React from 'react'

const Modify = (props) => 
{
    let isToModify = false

    const onEnter = (event) =>
    {
        event.key == "Enter" ? isToModify = false : isToModify = true
    }

    if (isToModify)
    {
        return (
            <td>
                <input 
                    type="number" 
                    min="0" 
                    value={props.value} 
                    onFocusOut={isToModify = false}
                    onKeyPress={onEnter}
                />
            </td>
        )
    }
    else
    {
        return(
            <td onClick={isToModify = true}>
                {props.value}
            </td>
        )
    }
}
export default Modify