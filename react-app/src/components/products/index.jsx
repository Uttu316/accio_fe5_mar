import { useState } from "react";

const Products = () => {
  const [input, setInput] = useState("");
  const [products, setProducts] = useState([]);

  const onInput = (e) => {
    const { value } = e.target;
    setInput(value);
  };
  const onAdd = () => {
    let item = {
      label: input,
      id: Date.now(),
    };
    setProducts([item, ...products]);
    setInput("");
  };

  return (
    <div>
      <input
        value={input}
        onChange={onInput}
        placeholder="Write product name.."
      />
      <button onClick={onAdd}>Add New Product</button>
      <ul>
        {products.map((i) => (
          <li key={i.id}>
            <span>{i.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Products;
