import { FormEvent, useState, ChangeEvent } from "react"

export function CreateProduct() {

  const [value, setValue] = useState('')

  const submitHandler = (event: FormEvent) => {
    event.preventDefault()
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
      <button type="submit" 
        className="border px-4 py-2 bg-slate-300 hover:bg-slate-400 hover:text-gray-200"
        >
        Create
      </button>
    </form>
  )
}