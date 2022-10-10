
import { CreateProduct } from "./components/CreateProduct";
import { ErrorMessage } from "./components/ErrorMessage";
import { Loader } from "./components/Loader";
import { Modal } from "./components/Modal";
import { Product } from "./components/Product";
import { useProducts } from './hooks/products';
import { useContext } from 'react';
import { IProduct } from './models';
import { ModalContext } from './context/ModalContext';

function App() {

  const { products, loading, error, addProduct } = useProducts()

  const {modal, open: openModal, close: closeModal } = useContext(ModalContext)

  const createHadler = (product: IProduct) => {
    closeModal()
    addProduct(product)
  }

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      { products.map(product => <Product key={product.id} product={product} />) }

      {modal && <Modal title="Create new Product" onClose={closeModal}>
        <CreateProduct onCreate={createHadler} />
      </Modal>}

      <button onClick={openModal} 
        className="w-10 h-10 rounded-full fixed bottom-5 right-5 bg-red-500 text-2xl text-white"
        >+</button>
    </div>
  )
}

export default App;
