

const mudaImage = () => {
    var image = document.getElementById("img");
    var title = document.getElementById("name_box");
    var valorprincipal = 0;
    var imagens = ["/img/img-1.webp","/img/img-2.webp","/img/img-3.webp",'./img/img-4.webp','./img/img-5.webp']
    var title_box = ['Adidas confort premium 1 ','Adidas confort premium 2 ','Adidas confort premium 23','Adidas confort premium 233','Adidas confort premium 23330',]

    const mudarFoto = () => {
        if(++valorprincipal >= imagens.length)
        valorprincipal  = 0
        image.src = imagens[valorprincipal]
        
      
    }
    const mudaTitulo = () => {
        if(++valorprincipal >= title_box.length)
            valorprincipal  = 0
            title.innerText = title_box[valorprincipal]
            


    }
    setInterval(mudaTitulo, 3000)

    setInterval(mudarFoto, 3000);
}
mudaImage();


const goToEnterpage = () => {
    
    window.location.href = "enter.html"


}

