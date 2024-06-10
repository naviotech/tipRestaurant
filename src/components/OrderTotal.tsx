import { useMemo } from "react"
import { OrderItem } from "../types/type"
type OrderTotalsProps = {
  order: OrderItem[],
  tip:number,
  setOrder: React.Dispatch<React.SetStateAction<OrderItem[]>>
}

const OrderTotal = ({ order, tip, setOrder}: OrderTotalsProps) => {
  const subTotal = useMemo(()=> order.reduce((total, item)=> total + (item.price * item.quantity), 0),[order])
  const propina = subTotal*tip
  return (
    <>
      <section>
        <h2 className="font-bold text-2xl">Totales y propinas:</h2>
        <p>
          Subtotal a Pagar: <span className="font-bold">${subTotal}</span>
        </p>
        <p>
          Propina: <span className="font-bold">${propina.toFixed(2)}</span>
        </p>
        <p>
          Total a Pagar: <span className="font-bold">${subTotal + propina}</span>
        </p>
        <button className="w-full bg-black p-4 uppercase text-white font-bold mt-10 hover:bg-gray-300 hover:text-black transition-colors"
        onClick={()=>setOrder([])}>Confirmar</button>
      </section>
    </>
  )
}

export default OrderTotal
