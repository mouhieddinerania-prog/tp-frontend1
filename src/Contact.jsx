import Header from './Header.jsx'
import Sidebar from './sidebar.jsx'

function Contact() {
    return (
        <>
            <Header />
            <div className="flex">
                <Sidebar />
                <main className="min-h-screen flex-1 bg-slate-50 p-8">
                    <h2 className="text-3xl font-bold text-slate-800">Contact</h2>
                    <p className="mt-4 text-slate-600">Contactez-nous pour toute question.</p>
                </main>
            </div>
        </>
    )
}

export default Contact