const scroll = (seccion) => {
    /* let objetoSeccion = document.querySelector('#'+seccion);
    let x = objetoSeccion.offsetTop;
    let y = objetoSeccion.offsetLeft;

    window.scrollTo({
        top: x,
        left: y,
        behavior: 'smooth'
    }) */

    let objetoSeccion = document.querySelector('#'+seccion)
    objetoSeccion.scrollIntoView({
        behavior: "smooth",
        block: "center" 
        });
}