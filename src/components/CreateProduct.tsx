import { FormEvent, useState, ChangeEvent } from "react"
import { IProduct } from '../models';
import axios from "axios";
import { ErrorMessage } from './ErrorMessage';

const productData: IProduct =  {
  title: '',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
  rating: {
    rate: 4.5,
    count: 10
  }
}

interface CreateProductProps {
  onCreate: () => void
}

export function CreateProduct({onCreate}: CreateProductProps) {

  const [value, setValue] = useState('')

  const [error, setError] = useState('')



  const submitHandler = async (event: FormEvent) => {
    event.preventDefault()
    setError('')

    if (value.trim().length === 0) {
      setError('Please enter valid Title!')
      return
    }

    productData.title = value
    const response =  await axios.post<IProduct>('https://fakestoreapi.com/products', productData)

    onCreate()
  }

  const cangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <form 
      onSubmit={submitHandler}
      >
      <input type="text"
        className="border px-4 py-2 mb-2 w-full outline-0"
        placeholder="Enter Product Title!"
        value={value}
        onChange={cangeHandler}
      />

      { error && <ErrorMessage error={error} /> }

      <button type="submit" 
        className="border px-4 py-2 bg-slate-300 hover:bg-slate-400 hover:text-gray-200"
        >
        Create
      </button>
    </form>
  )
}