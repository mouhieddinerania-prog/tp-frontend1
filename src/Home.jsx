import Header from './Header.jsx'
import Sidebar from './sidebar.jsx'

function Home() {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="min-h-screen flex-1 bg-slate-50 p-8">
          <h2 className="text-3xl font-bold text-slate-800">Accueil</h2>
        </main>
      </div>
    </>
  )
}

export default Home