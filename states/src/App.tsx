import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [searchText, setSearchText] = useState<string>('');

    const [productList, setProductList] = useState<string[]>(['Laptop', 'Smartphone', 'Microphone']);

    const [productName, setProductName] = useState<string>('');
    const [productIndex, setProductIndex] = useState<number>(0);

    const [sortDirection, setSortDirection] = useState<string>('ascending');

    const [errorMessage, setErrorMessage] = useState<string>('');
    const [successMessage, setSuccessMessage] = useState<string>('');

    const addProduct = () => {
        if (productName === '') {
            setErrorMessage('please add a product name');
            setSuccessMessage('');
        } else {
            setProductList([...productList, productName]);
            setProductName('');
            setSuccessMessage('product has been added');
            setErrorMessage('');
        }
    };

    const removeProduct = (index: number) => {
        if (productIndex < 0) {
            setErrorMessage('index cannot be less than 1');
            setSuccessMessage('');
        } else if (productIndex > productList.length - 1) {
            setErrorMessage('product does not exist');
            setSuccessMessage('');
        } else {
            let removedProductFromList = productList.filter((_, i) => i !== index);
            setProductList(removedProductFromList);
            setSuccessMessage(`${productList[index]} has been removed from the list`);
            setErrorMessage('');
        }
    };

    const sortedProductList = productList.sort((a, b) => {
        if (sortDirection === 'ascending') {
            return a.localeCompare(b);
        } else if (sortDirection === 'descending') {
            return b.localeCompare(a);
        } else {
            return 0;
        }
    });

    return (
        <>
            {errorMessage && <div className="error">{errorMessage}</div>}
            {successMessage && <div className="success">{successMessage}</div>}

            <div className="searchContainer">
                <label htmlFor="search">search: </label>
                <input
                    type="search"
                    name="search"
                    id="search"
                    onChange={(e) => setSearchText(e.target.value.toLowerCase())}
                ></input>
            </div>

            <div className="productContainer">
                <label htmlFor="add">add a product(name): </label>
                <input type="text" id="add" onChange={(e) => setProductName(e.target.value)}></input>
                <button onClick={() => addProduct()}>add</button>
                <br />
                <label htmlFor="remove">remove a product (index): </label>
                <input
                    type="number"
                    id="remove"
                    value={productIndex + 1}
                    onChange={(e) => setProductIndex(parseInt(e.target.value) - 1)}
                ></input>
                <button onClick={() => removeProduct(productIndex)}>remove</button>
            </div>

            <select onChange={(event) => setSortDirection(event.target.value)}>
                <option value="ascending" selected>
                    name (ascending)
                </option>
                <option value="descending">name (descending)</option>
            </select>

            <ol>
                {sortedProductList
                    .filter((product) => product.toLowerCase().startsWith(searchText))
                    .map((product, index) => (
                        <li key={index}>{product}</li>
                    ))}
            </ol>
        </>
    );
};

export default App;
