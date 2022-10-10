
import { IProduct } from '../models';
import { useState } from 'react';
interface ProductProps {
  product: IProduct
}

export function Product({ product }: ProductProps) {

  const [details, setDetails] = useState(false)

  const btnBgClassname = details ? 'bg-slate-100' : 'bg-slate-300'

  const btnClasses = [
    'px-4 py-2 border',
    btnBgClassname
  ]

  return (
    <div
      className="border py-2 px-4 rounded flex flex-col items-center mb-2"
    >

      <img src={product.image} alt={product.title} className="w-1/6" />

      <p>
        {product.title}
      </p>

      <p className='font-bold'>{product.price}</p>

      <button
        onClick={() => setDetails(prev => !prev)} 
        className={btnClasses.join(' ')}
        >
        {details ? 'Hide Details':'Show Details'}
      </button>

      {details && <div>
        <p>{product.description}</p>
        <p>Rate: <span style={{fontWeight: 'bold'}}>{product.rating?.rate}</span></p>
      </div> 

      }

    </div>
  )
}