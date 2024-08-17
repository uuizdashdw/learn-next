import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000',
});

// 상품 목록 조회하는 API 함수
function fecthProducts() {
  return instance.get('/products');
}

// 상품 상세 정보 조회 API 함수
function fetchDetailProducts(id) {
  return instance.get(`/products/${id}`);
}

// 장바구니에 상품 추가 API 함수
function createCartItem({ id, name, price, imageUrl }) {
  return instance.post('/carts', {
    id,
    name,
    price,
    imageUrl,
  });
}

// 장바구니 목록을 들고오는 API 함수
function fetchCarts() {
  return instance.get('/carts');
}

// 특정 ID 에 해당하는 장바구니 아이템 삭제 API 함수
function removeCartItem(id) {
  return instance.delete(`/carts/${id}`);
}

export {
  fecthProducts,
  fetchDetailProducts,
  createCartItem,
  fetchCarts,
  removeCartItem,
};
