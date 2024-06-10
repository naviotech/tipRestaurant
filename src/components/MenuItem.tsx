
const MenuItem = ({ id,name, price, addItem }: {id:number, name:string, price:number, addItem: (id:number) => void}) => {
  return (
    <>
      <button className="flex justify-between items-center border-2 mb-2 border-cyan-500 p-4 w-[100%] hover:bg-cyan-500 transition-colors hover:text-white rounded-2xl"
      onClick={()=> addItem(id)}
      >
        <p className="text-xl">{name}</p>
        <p className="font-black">{price}€</p>
      </button>
    </>
  )
}

export default MenuItem
