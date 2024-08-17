import ProductHeader from '@/components/ProductHeader';
import ProductsList from '@/components/product-list/ProductsList';

function ProductPage() {
  const headerTitle = '상품 목록 페이지';
  return (
    <div>
      <ProductHeader title={headerTitle} />
      <ProductsList></ProductsList>
    </div>
  );
}
export default ProductPage;
