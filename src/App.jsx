import './App.css'
import { Header } from './layout/Header'
import { Title } from './components/Title'
import { Intermediate } from './layout/Intermediate'
import { Cards } from './layout/Cards'
function App() {

  return (
    <div className='bg-[#393b38] font-open flex flex-col  min-h-screen w-full gap-16'>
      <Header />
      <main className='flex-1 flex flex-col gap-36'>
        <Title />
        <Intermediate />
        <Cards />
      </main>
    </div>
  )
}

export default App
