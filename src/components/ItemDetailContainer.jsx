import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import arregloLibros from "./json/LibrosOLD.json";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore, collection } from "firebase/firestore";


const ItemDetailContainer = () =>{
    const [libro, setLibro] = useState();
    const {id} = useParams();
   
  
   useEffect(() => {
    console.log("ItemDetailContiner", "0KQuUMz7AfaOcw26p4Vs");
        const db = getFirestore();
        const docRef = doc(db, "libros", "0KQuUMz7AfaOcw26p4Vs");

        getDoc(docRef).then(snapShot => {
            if (snapShot.exists()) {
                setLibro({id:snapShot.id, ...snapShot.data()});
            }
           
        });

    }, [id]);

/*
    useEffect(() => {
        const promesa = new Promise(completado => {
            setTimeout(() => {               
                completado(arregloLibros.find(buscaLibro => buscaLibro.codigo_libro == parseInt(id)) );
            }, 2000)
            setVisible(false);
        });
        
        promesa.then(respuesta => {
            setLibro(respuesta);
        })
    }, [id])
*/
    return(
            <div>
                <ItemDetail libro = {libro} /> 
            </div>
    )
}

export default ItemDetailContainer;