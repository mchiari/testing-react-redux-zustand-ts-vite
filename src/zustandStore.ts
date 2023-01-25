import { create } from 'zustand'



export const useStore = create<{
  count: number,
  inc: () => void
}>()(set => ({
  count: 0,
  inc: () => set(state => ({ count: state.count + 1 })),
}))



// function Controls() {
//   const inc = useStore(state => state.inc);
//   return <button onClick={inc}>one up</button>
// }

// function Counter() {
//   const count = useStore(state => state.count)
//   return <h1>{count}</h1>
// }