import { useState } from 'react';
import styles from './ShoppingList.module.css';

interface ShoppingListItem {
    name: string;
    quantity: number;
}

const ShoppingList = () => {
    const [shoppingList, setShoppingList] = useState<ShoppingListItem[]>([]);

    const [name, setName] = useState<string>('');
    const [quantity, setQuantity] = useState<number>(0);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleAddItem = () => {
        if (name === '') {
            setErrorMessage('Name must not be empty');
            setSuccessMessage('');
        } else if (quantity < 1) {
            setErrorMessage('Quantity must be greater than 0');
            setSuccessMessage('');
        } else {
            setShoppingList([
                ...shoppingList,
                { name: name, quantity: quantity },
            ]);
            setSuccessMessage('Item added to shopping list');
            setErrorMessage('');
        }
    };

    const handleRemoveItem = (index: number) => {
        let updatedShoppingList = shoppingList.filter((item, i) => i !== index);
        setShoppingList(updatedShoppingList);
        setSuccessMessage('Item removed from shopping list');
        setErrorMessage('');
    };

    return (
        <>
            <div>
                {errorMessage && (
                    <div className={styles.error}>{errorMessage}</div>
                )}
                {successMessage && (
                    <div className={styles.success}>{successMessage}</div>
                )}

                <div className={styles.shoppingAddForm}>
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                    <label htmlFor="quantity">Quantity: </label>
                    <input
                        type="number"
                        id="quantity"
                        placeholder="Quantity"
                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                    ></input>
                    <button onClick={handleAddItem}>Add</button>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {shoppingList.map((item, index) => (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>
                                    <button
                                        onClick={() => handleRemoveItem(index)}
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ShoppingList;
