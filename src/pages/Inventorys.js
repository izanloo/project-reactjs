import React, { useEffect, useState } from 'react';
import { api } from "../services/Config";
import { toast } from "react-toastify";
import EasyEdit, { Types } from 'react-easy-edit';
import Tablee from "../Components/Admin/Tablee";
import WithAdmin from "../Layouts/WithAdmin";

const columns = [
  { id: 'product', label: 'محصولات', minWidth: 200, align: 'center' },
  { id: 'price', label: 'قیمت', minWidth: 100, align: 'center' },
  { id: 'inventory', label: 'موجودی', minWidth: 100, align: 'center' },
];

function createData(product, price, inventory) {
  return { product, price, inventory };
}

const Inventory = () => {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    api.get("/products?_sort=id&_order=desc")
      .then(product => setproducts(product.data))
      .catch(error => console.log(error))
  }, [])

  function cancel() {
    toast.error('کنسل شد')
  }
  function save(value, product, item) {
    const productTarget = products.filter(productItem => productItem.id === product.id)[0]
    const newData = { ...productTarget, [item]: value }
    api.put(`/products/${product.id}`, newData)
      .then((res) => console.log(res))
      .catch((error) => console.log(error))
    toast.success("محصول ویرایش شد")
  }
  const rows = products.map(item =>
    createData(
      item.name,
      <EasyEdit
        value={+item.price}
        productId={item.id}
        type={Types.TEXT}
        onSave={(e) => save(e, item, "price")}
        onCancel={cancel}
        attributes={{ name: "awesome-input", id: 1 }}
        saveButtonLabel="save"
        cancelButtonLabel="cancel"

      />,
      <EasyEdit
        value={+item.count}
        productId={item.id}
        type={Types.TEXT}
        attributes={{ name: "awesome-input", id: 1 }}
        onSave={(e) => save(e, item, "count")}
        onCancel={cancel}
        saveButtonLabel="save"
        cancelButtonLabel="cancel"
      />
    )
  )
  return (
    <div>
      <h4 style={{ paddingRight: '5px' }}>مدیریت موجودی و قیمت ها</h4>
      <Tablee columns={columns} rows={rows} />
    </div>
  );
}
export default WithAdmin(Inventory);

