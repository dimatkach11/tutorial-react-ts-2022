export function CreateProduct() {
  return (
    <form>
      <input type="text"
        className="border px-4 py-2 mb-2 w-full outline-0"
        placeholder="Enter Product Title!" 
      />
      <button type="submit" 
        className="border px-4 py-2 bg-slate-300 hover:bg-slate-400 hover:text-gray-200"
        >
        Create
      </button>
    </form>
  )
}