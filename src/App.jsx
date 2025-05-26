import './App.css'
import { Header } from './layout/Header'
import { Title } from './components/Title'

function App() {

  return (
    <div className='bg-[#393b38] font-open flex flex-col  min-h-screen w-full gap-16'>
      <Header />
      <main className='flex-1'>
        <Title />
      </main>
    </div>
  )
}

export default App
