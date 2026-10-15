import { Link } from 'react-router'

function Sidebar() {
  return (
    <aside className="min-h-screen w-64 bg-slate-900 p-5 text-white">
      <h2 className="mb-5 font-bold">Menu</h2>
      <nav aria-label="Navigation principale">
        <ul className="space-y-3">
          <li><Link className="block hover:text-yellow-300" to="/">Accueil</Link></li>
          <li><Link className="block hover:text-yellow-300" to="/stagiaires">Stagiaires</Link></li>
          <li><Link className="block hover:text-yellow-300" to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar