
import { CreateProduct } from "./components/CreateProduct";
import { ErrorMessage } from "./components/ErrorMessage";
import { Loader } from "./components/Loader";
import { Modal } from "./components/Modal";
import { Product } from "./components/Product";
import { useProducts } from './hooks/products';
import { useState } from 'react';
import { IProduct } from './models';

function App() {

  const { products, loading, error, addProduct } = useProducts()

  const [modal, setModal] = useState(true)

  const createHadler = (product: IProduct) => {
    setModal(false)
    addProduct(product)
  }

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      { products.map(product => <Product key={product.id} product={product} />) }

      {modal && <Modal title="Create new Product">
        <CreateProduct onCreate={createHadler} />
      </Modal>}
    </div>
  )
}

export default App;
