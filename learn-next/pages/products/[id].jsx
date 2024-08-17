import ProductHeader from '@/components/ProductHeader';
import { fetchDetailProducts } from '@/api/index';
import ProductInfo from '@/components/product-detail/ProductInfo';

export async function getServerSideProps(context) {
  const id = context.params.id;
  const { data } = await fetchDetailProducts(id);

  return {
    props: {
      productDetail: data,
    },
  };
}

export default function ProductDetailPage({ productDetail }) {
  const headerTitle = '상품 상세 정보 페이지';

  return (
    <div>
      <ProductHeader title={headerTitle} />
      <ProductInfo productDetail={productDetail} />
    </div>
  );
}
