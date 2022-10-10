
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

  const [modal, setModal] = useState(false)

  const createHadler = (product: IProduct) => {
    setModal(false)
    addProduct(product)
  }

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      { products.map(product => <Product key={product.id} product={product} />) }

      {modal && <Modal title="Create new Product" onClose={() => setModal(false)}>
        <CreateProduct onCreate={createHadler} />
      </Modal>}

      <button onClick={() => setModal(true)} 
        className="w-10 h-10 rounded-full fixed bottom-5 right-5 bg-red-500 text-2xl text-white"
        >+</button>
    </div>
  )
}

export default App;
