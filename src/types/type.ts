export type Menu = {
  id:number,
  name:string,
  price:number
}

export type OrderItem = Menu & {
  quantity: number
}