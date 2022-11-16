import React from 'react'
import ProductRow from '../components/ProductRow'

const MainPage = () =>
{
    const list =
    [
        {
            id: 0,
            product: "Pollo",
            isBought: true,
            quantity: 1,
            price: 5
        },
        {
            id: 1,
            product: "Patate",
            isBought: false,
            quantity: 1,
            price: 1
        }
    ]

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <td>Prodotto</td>
                        <td>Acquistato</td>
                        <td>Quantità</td>
                        <td>Prezzo</td>
                        <td>Elimina</td>
                    </tr>
                </thead>

                <tbody>
                    {
                        list.map(({ id, product, isBought, quantity, price }) => {
                            return <tr>
                                <td>{product}</td>
                                <td><input type="checkbox" checked={isBought} /></td>
                                <td>{quantity}</td>
                                <td>{price}</td>
                                <td><button onClick={()=>console.log(`ID PRODOTTO = ${id}`)}>Elimina</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    );
}
export default MainPage