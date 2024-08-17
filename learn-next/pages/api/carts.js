import { removeCartItem } from '@/api';

export default async function Handler(req, res) {
  const id = req.body.id;
  const { data } = await removeCartItem(id);
  res.status(200).send(`${data.name}이(가) 삭제 되었습니다.`);
}
