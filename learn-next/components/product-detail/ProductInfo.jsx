import Image from 'next/image';

import styles from './ProductInfo.module.css';
import { useRouter } from 'next/router';
import { createCartItem } from '@/api';

export default function ProductInfo({ productDetail }) {
  const router = useRouter();
  const { id, name, price, imageUrl } = productDetail;

  const addCart = async () => {
    const { data } = await createCartItem(productDetail);
    console.log(data);
    alert('장바구니에 추가됨');
    router.push('/cart');
  };

  return (
    <div className={styles.container}>
      <Image src={imageUrl} width={300} height={300} alt={name} />
      <div className={styles.description}>
        <p>{name}</p>
        <p>{price}</p>
        <button onClick={addCart}>장바구니 담기</button>
      </div>
    </div>
  );
}
