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
                    for (item in list)
                    {
                        <ProductRow value={item}></ProductRow>
                    }
                </tbody>
            </table>
        </>
    );
}
export default MainPage