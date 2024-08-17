import { fetchCarts } from '@/api';
import CartHeader from '@/components/cart/CartHeader';
import CartList from '@/components/cart/CartList';

export async function getServerSideProps() {
  const { data } = await fetchCarts();

  return {
    props: {
      carts: data,
    },
  };
}

function CartPage({ carts }) {
  console.log(carts);
  return (
    <div>
      <CartHeader />
      <CartList carts={carts} />
    </div>
  );
}

export default CartPage;
