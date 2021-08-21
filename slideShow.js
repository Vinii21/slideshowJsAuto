addEventListener('DOMContentLoaded', () =>
{
    const imagenes =
    ['img/1.jpg','img/2.png','img/3.png','img/4.png','img/5.png']

    let i = 1;
    const img1 = document.querySelector('#img1');
    const img2 =document.querySelector('#img2');
    img2.classList.add('ocultar')
    const progressBar = document.querySelector('#progress-bar');
    const divIndicadores = document.querySelector('#indicadores')
    let porcentaje_base = 100/imagenes.length
    let porcentaje_actual = porcentaje_base

    for(let index = 0; index < imagenes.length; index++)
    {
        const div = document.createElement('div');
        div.classList.add('circles')
        div.id = index
        divIndicadores.appendChild(div)
    };

    progressBar.style.width = `${porcentaje_base}%`;
    
    const circulos = document.querySelectorAll('.circles');
    img1.src = imagenes[0];
    img2.src = img1.src;
    circulos[0].classList.add('resaltado');


    const slideshow = () =>
    {
        img2.classList.remove('ocultar')
        img2.src = imagenes[i];
        const circulo_actual = Array.from(circulos).find(el => el.id == i);
        Array.from(circulos).forEach(cir => cir.classList.remove('resaltado'));
        circulo_actual.classList.add('resaltado');

        i++
        porcentaje_actual += porcentaje_base
        progressBar.style.width = `${porcentaje_actual}%`
        if (i == imagenes.length)
        {
            i = 0
            porcentaje_actual = porcentaje_base - porcentaje_base
        }
    }

    setTimeout(()=>{
        img1.src = img2.src
    }, 1000)

    setInterval(slideshow, 4000)

})