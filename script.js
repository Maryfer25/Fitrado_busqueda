document.addEventListener("keyup", e =>{

    if (e.target.matches("#buscador")){
  
        if (e.key =="Enter")e.target.value = " ";
  
        document.querySelectorAll(".seccion",".card", ".articulo").forEach( cosmeticos =>{

            cosmeticos.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?cosmeticos.classList.remove("filtro")
              :cosmeticos.classList.add("filtro")
        })
    }
  });
