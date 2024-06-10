import { useState } from "react"
import { OrderItem } from "../types/type"
import { menuItems } from "../data/db"
import { Menu } from "../types/type"

export function useOrder(){
  const [ order, setOrder ]= useState<OrderItem[]>([])
  const [tip, setTip ] = useState(0)

  function addItem(id:Menu['id']){
    const item = menuItems.find(item =>item.id === id)
    if(item){
      setOrder(
        order => {
          const itemExist = order.find(order => order.id === id)
          if(!itemExist){
            return [...order, { ...item, quantity:1 }]
          }else{
            const increment = [...order]
            return increment.map(item => {
              if(item.id === id){
                return { ...item, quantity: item.quantity + 1 }
              }else{
                return item
              }
            })
          }
        }
      )
    }
  }
  function deleteItem(id:Menu['id']){
    const item = menuItems.find(item =>item.id === id)
    if(item){
      const newOrder = [...order]
      const newParams = newOrder.filter(item => item.id !== id)
      setOrder(newParams)
    }
  }

  return{
    addItem,
    order,
    deleteItem,
    setTip,
    tip,
    setOrder
  }
}