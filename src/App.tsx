import { useOrder } from './hooks/useOrder'
import { menuItems } from "./data/db"
import MenuItem from './components/MenuItem'
import OrderContent from './components/OrderContent'
import OrderTotal from './components/OrderTotal'
import Tip from './components/Tip'

function App() {
  const { addItem, order, deleteItem, setTip, tip, setOrder } = useOrder()
  
  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-bold">TIP CALCULATOR</h1>
      </header>
      <main className='max-w-7xl px-4 mx-auto py-20 grid md:grid-cols-2 md:gap-10'>

        <section>
          <h2 className='text-center text-2xl font-semibold mb-16'>Menú</h2>
          {menuItems.map(item => (
            <MenuItem 
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            addItem={addItem}
            />
          ))}
        </section>

        <section>
          <h2 className='text-center text-2xl font-semibold mb-16'>Consumo</h2>
          <section className='border-2 border-black rounded-lg p-4'>
            <OrderContent
            order={order}
            deleteItem={deleteItem}
            />
            {order.length > 0 && (
              <>
                <Tip 
                setTip={setTip}
                />
                <OrderTotal
                  order={order}
                  tip={tip} 
                  setOrder={setOrder}
                  />
              </>
            )}
          </section>
        </section>
      </main>
    </>
  )
}

export default App
