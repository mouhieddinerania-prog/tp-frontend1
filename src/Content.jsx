import { useEffect, useState } from "react";

 
export default function Content(props) {
 
    const [etudiants, setEtudiants] = useState([])
    const [nbEtudiants, setNbEtudiants] = useState({total:0, redoublant:0, reussi:0});

    useEffect(function(){setEtudiants([
        {id:1, nom:"T", note:20},
        {id:2, nom:"Dilaw", note:9},
        {id:3, nom:"Tset", note:18},
        {id:4, nom:"Test", note:10},
        {id:5, nom:"Walid", note:0}])},[])

    useEffect(function(){
        const nbEtudiants = etudiants.reduce((counts, item) => {
            counts.total += 1;
            if (item.note >= 10) {
                counts.reussi += 1;
            } else {
                counts.redoublant += 1;
            }
            return counts;
        }, {total:0, redoublant:0, reussi:0});

        setNbEtudiants(nbEtudiants);
    }, [etudiants]);


    const [oEtdudiant, setoEtudiant] = useState({id:"", nom:"", note:""})
    const [tri, setTri] = useState("");
    const [formVisible, setFormVisible] = useState(false);
  
    function ajouter() {
      
      const idExiste = etudiants.some(item => item.id == oEtdudiant.id)

      if(idExiste){
        alert("L'id existe déjà")
      }else{
        setEtudiants([...etudiants, oEtdudiant])
        setFormVisible(false)
      }
  }

    function modifier(){
      setEtudiants(etudiants.map(function(item){
        if(String(item.id) === String(oEtdudiant.id)){
          return oEtdudiant
        }
        return item
      }))
      setFormVisible(false)
    }

    function supprimer(){
      setEtudiants(etudiants.filter(function(item){
        if(item.id != oEtdudiant.id){
          return item
        }
      }))
    }

    function afficher_details(item) {
      setoEtudiant({...oEtdudiant, id: item.id, nom: item.nom, note: item.note});
      setFormVisible(true);
    }

    function onInputChange(event) {
      const { name, value } = event.target;
      setoEtudiant({...oEtdudiant, [name]: value});
    }

    function tri_liste(){
      const etudiantsTri = [...etudiants];

      if (tri === "" || tri === "decroissant") {
        etudiantsTri.sort((a, b) => Number(a.id) - Number(b.id));
        setTri("croissant");
      } else {
        etudiantsTri.sort((a, b) => Number(b.id) - Number(a.id));
        setTri("decroissant");
      }

      setEtudiants(etudiantsTri);
    }
 

    return (
        <main className="min-h-screen flex-1 bg-slate-50 p-8">
 
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-800">
                    Liste des étudiants
                </h2>
            </div>


                <div className="mt-8">
                  <button
                    type="button"
                    onClick={() => {
                      setoEtudiant({id:"", nom:"", note:""});
                      setFormVisible(true);
                    }}
                    className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700">
                    Ajouter un étudiant
                  </button>
                </div>

                {formVisible && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4"
                    onClick={() => setFormVisible(false)}>
                    <div
                      role="dialog"
                      aria-modal="true"
                      aria-labelledby="student-form-title"
                      className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl"
                      onClick={(event) => event.stopPropagation()}>
                      <div className="mb-5 flex items-center justify-between">
                        <h3 id="student-form-title" className="text-xl font-bold text-slate-800">
                          Ajouter ou modifier un étudiant
                        </h3>
                        <button
                          type="button"
                          aria-label="Fermer le formulaire"
                          onClick={() => setFormVisible(false)}
                          className="rounded-lg px-3 py-1 text-2xl leading-none text-slate-500 hover:bg-slate-100 hover:text-slate-800">
                          &times;
                        </button>
                      </div>
                      <div className="grid gap-4 md:grid-cols-2">
                        <input type="text" placeholder="ID" name="id" value={oEtdudiant.id} onChange={onInputChange}
                          className="rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-blue-500"
                        />
                        <input type="text" placeholder="Nom" name="nom" value={oEtdudiant.nom} onChange={onInputChange}
                          className="rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-blue-500"
                        />
                        <input type="number" placeholder="Note" name="note" value={oEtdudiant.note} onChange={onInputChange}
                          className="rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-blue-500 md:col-span-2"
                        />
                        <button
                          onClick={ajouter}
                          className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700">
                          Ajouter
                        </button>
                        <button
                          onClick={modifier}
                          className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700">
                          Modifier
                        </button>
                        <button
                          onClick={supprimer}
                          className="rounded-lg bg-red-600 px-5 py-2 font-medium text-white hover:bg-red-700 md:col-span-2">
                          Supprimer
                        </button>
                      </div>
                    </div>
                  </div>
                )}
            <div>

            
              <div className="flex gap-4 mt-4">
                <p className="mt-2 text-slate-500">
                  Total : {nbEtudiants.total}
                </p>
                <p className="mt-2 text-slate-500">
                  Réussis : {nbEtudiants.reussi}
                </p>
                <p className="mt-2 text-slate-500">
                  Redoublants : {nbEtudiants.redoublant}
                </p>
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  onClick={tri_liste}
                  className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700 ">
                  Tri {tri === "croissant" ? "décroissant" : "croissant"}
                </button>
              </div>
            </div>
 
            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
 
            {etudiants.map(function(item){
                return (
                      <div key={item.id} className={`rounded-xl p-5 shadow ${ item.note >= 10 ? "bg-white" : "bg-red-600"}`} onClick={() => afficher_details(item)}>
                        <h3 className="text-lg font-bold">
                          {item.nom}
                        </h3>
                    
                        <p className="text-lg font-bold text-slate-500">
                          Id : {item.id}
                        </p>

                        <p className="mt-2 text-slate-500">
                          Note : {item.note} / 20
                        </p>
                      </div>
                )
 
                })}
 
            </div>
 
        </main>
    );
}
