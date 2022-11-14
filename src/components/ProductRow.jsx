import React from 'react'
import Modify from './Modify'

const ProductRow = (props) => 
{
    return(
        <tr>
            <td>{props.value.product}</td>
            <td>
                <input type="checkbox" checked={props.value.isBought} />
            </td>

            <td>
                <Modify value={props.value.quantity} />
            </td>

            <td>
                <Modify value={props.value.price} />
            </td>

            <td>
                <button>Elimina</button>
            </td>
        </tr>
    )
}
export default ProductRow