import axios from 'axios';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import styles from './ProductsList.module.css'
import Link from 'next/link';
import { fecthProducts } from '@/api';

function ProductsList() {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fecthProducts().then(res => setProducts(res.data));
    
    }, []);

  return <div>
    <ul>
        {products &&
            products.map((product, index) => (
            <li key={index} 
                className={styles.item}>
                <Link href={`/products/${product.id}`}>
                    <div>
                        <Image src={product.imageUrl} 
                            width={300} 
                            height={250} 
                            alt={product.name}></Image>
                    </div>
                    <div>{product.name}</div>
                </Link>
            </li>
        ))}
    </ul>
</div>;
}

export default ProductsList;
