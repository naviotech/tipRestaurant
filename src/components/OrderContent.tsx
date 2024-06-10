import { OrderItem, Menu } from "../types/type"
type OrderContentProps= {
  order: OrderItem[],
  deleteItem : (id: Menu['id'])=> void
}
const OrderContent = ({order, deleteItem} : OrderContentProps) => {
  return (
    <>
      <article>
        {order.length === 0 &&(
          <p className="text-center">Sin ordenes pendientes</p>
        )}
        {order.length > 0 &&(
          order.map(item =>(
            <div key={item.id} className="flex justify-between items-center w-full p-4 mb-2 border-b-2 border-gray-500">
              <div>
                <p className="text-xl flex gap-3">
                  {item.name} -
                  <span className="font-bold text-xl">{item.price}€</span>
                </p>
                <p className="font-bold">
                  x{item.quantity} - <span>{item.price * item.quantity}€</span>
                </p>
              </div>
              
              <button onClick={()=> deleteItem(item.id)} className="bg-red-500 font-extrabold rounded-full h-8 w-8 flex items-center justify-center text-white hover:bg-red-300 transition-colors">
                x
              </button>
            </div>
          ))
        )}
      </article>
    </>
  )
}

export default OrderContent
