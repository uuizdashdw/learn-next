import axios from 'axios';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import styles from './ProductsList.module.css'

function ProductsList() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
        .get('http://localhost:4000/products')
        .then(res => setProducts(res.data));
    }, []);

    // console.log(products);
    useEffect(() => {
        console.log(products);
    }, [products]);

  return <div>
    <ul>
        {products &&
            products.map((product, index) => (
            <li key={index} 
                className={styles.item}>
                <div>
                    {/* <img src="" alt="" /> */}
                    <Image src={product.imageUrl} 
                           width={300} 
                           height={250} 
                           alt={product.name}></Image>
                </div>
                <div>{product.name}</div>
            </li>
        ))}
    </ul>
</div>;
}

export default ProductsList;
