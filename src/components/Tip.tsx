type TipProps ={
  setTip: React.Dispatch<React.SetStateAction<number>>
}
const Tip = ({ setTip }: TipProps) => {
  return (
    <div className="mb-7">
      <h3 className="font-bold text-2xl">Propina</h3>
      <form className="flex flex-col">
        <article className="w-[10%] flex justify-between">
          <label htmlFor="5">5%</label>
          <input id="5" name="tip" type="radio" value={0.05} onChange={e => setTip(+e.target.value)}/>
        </article>

        <article className="w-[10%] flex justify-between">
          <label htmlFor="10">10%</label>
          <input id="10" name="tip" type="radio" value={0.10} onChange={e => setTip(+e.target.value)}/>
        </article>

        <article className="w-[10%] flex justify-between">
          <label htmlFor="15">15%</label>
          <input id="15" name="tip" type="radio" value={0.15} onChange={e => setTip(+e.target.value)}/>
        </article>

        <article className="w-[10%] flex justify-between">
          <label htmlFor="20">20%</label>
          <input id="20" name="tip" type="radio" value={0.20} onChange={e => setTip(+e.target.value)}/>
        </article>
      </form>
    </div>
  )
}

export default Tip
