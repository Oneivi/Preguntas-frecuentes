const categorias = document.querySelectorAll('#categorias .categoria');
 const contenedorPreguntas = document.querySelectorAll('.contenedor-preguntas');
 let categoriaActiva= null;
 
 categorias.forEach((categoria) =>{
    categoria.addEventListener('click', (e)=>{
        categorias.forEach((elemento) => {
            elemento.classList.remove('activa');
        });

        e.currentTarget.classList.toggle('activa');

        categoriaActiva = categoria.dataset.categoria;

        //accion de activar el contenedor de preguntas que corresponde
        

        contenedorPreguntas.forEach((contenedor) =>{
            
            /*Comprobando los datos de cada categoria 
            
            console.log("Categoria activa",categoriaActiva);

            console.log("Dataset",contenedor.dataset.categoria);*/

            if(contenedor.dataset.categoria === categoriaActiva){
                contenedor.classList.add('activo');
            } else {
                contenedor.classList.remove('activo');
            }
        });
    });
 });