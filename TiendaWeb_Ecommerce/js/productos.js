const products = [
    ['../img/1.jpg', 'Aceite esencial de Clavo', '12ML', 7.99, 'Sale a: 665,83 €/L', 'El aceite esencial de clavo es conocido por sus increíbles propiedades antimicrobianas, antimicóticas, antisépticas, antivirales, afrodisíacas y estimulantes. Perfecto para utilizar en tus mezclas de Cosmética Natural, añadiendo unas cuantas gotas en tu crema corporal o aceite vegetal, conseguirás nutrir y lucir una piel radiante y 100% cuidad.'],
    ['../img/2.jpg', 'Parches de Oro de 24 kt Rejuvenecedores para Contorno de Ojos', '60UDS.', 15.50, 'Sale a: 0,26 €/ud.', 'Parches de oro de 24 kt rejuvenecedores para contorno de ojos de Natura Siberica. Parches para ojos con efecto rejuvenecedor enriquecidos con oro de 24kt. Su acción descongestiona la piel, la suaviza y mejora su luminosidad.Estos parches con oro de 24kt son la opción perfecta para rejuvenecer la mirada en pocos minutos. Basados en activo postbiótico único y extractos fermentados de mora de los pantanos norteña y frambuesa silvestre, contienen dos activos únicos para combatir los signos de envejecimiento: el complejo de polipéptidos SYN-COLL® y oro de 24kt. Gracias a ellos, estimulan la síntesis de colágeno en las células de la piel y ayudan a suavizar las arrugas, mejorando la'],
    ['../img/3.jpg', 'Parches Iluminadores para el Contorno de Ojos', '60UDS.', 15.50, 'Sale a: 0,26 €/ud.', 'Parches iluminadores para el contorno de ojos de Natura Siberica. 60 Parches para ojos con efecto iluminador que hidratan la piel del contorno, le devuelven la vitalidad y mejoran su protección para mantenerla joven.Estos parches iluminadores son una solución rápida y cómoda para darle a tus ojos ese toque de luz y vitalidad que el estrés y la vida urbana les van quitando. Con su base de biome con activo postbiótico único y extractos fermentados de mora de los pantanos norteña y frambuesa silvestre ayudan al microbioma de la piel a aumentar su resistencia y mejorar su luminosidad. La vitamina C presente en su fórmula mejora el tono y la textura del contorno para ayudar a recuperar su brillo natural, y la niacinamida contribuye a fortalecer la barrera de hidratación de la epidermis, dando lugar a un resultado suave, esplendoroso y rejuvenecido.'],
    ['../img/4.jpg', 'Parches Supertonificantes para Contorno de Ojos', '60UDS.', 15.50, 'Sale a: 0,26 €/ud.', 'Parches supertonificantes para contorno de ojos de Natura siberica. Parches para ojos con efecto tonificante que reducen visiblemente los signos de fatiga en la mirada y le aportan luz y vitalidad al instante.Estos parches supertonificantes son la solución definitiva para decir adiós a los signos de fatiga y la hinchazón en el contorno de los ojos. Basados en activo postbiótico único y extractos fermentados de mora de los pantanos norteña y frambuesa silvestre, crean sobre la mirada un efecto iluminador y energizante al instante. La cafeína presente en su fórmula ayuda a tensar las líneas finas y reducir la piel hinchada, mientras que la vitamina E genera un efecto regenerador que deja un aspecto descansado y revitalizado.'],
    ['../img/5.jpg', '6 Discos Desmaquillantes de Fibra Natural', '6UDS.', 10.50, 'Sale a: 1,75 €/ud.', 'Eliminan el maquillaje y limpian el rostro con suavidad. Elaborados en algodón y carbón de bambú. De doble cara y función:Limpieza diaria: elaborada en algodón ultrasuave es adecuada para productos líquidos.Exfoliante: combinación de algodón y carbón de bambú, de propiedades purificantes y desintoxicantes. Indicada para texturas cremosas y densas.Incluye 6 discos y una práctica bolsita de algodón para lavarlos ( máx. 30 grados) y guardarlos. No secar en secadora.Reúnen ahorro en otros productos de un solo uso (toallitas, discos de algodón) y máximo respeto por el medio ambiente.'],
    ['../img/6.jpg', 'Aceite anticelulítico de abedul', '100ML', 22.90, 'Sale a: 229,00 €/L', 'El extracto de hojas de abedul contiene flavonoides y tanines, los cuales sirven para mantener y conservar el metabolismo y circulación de los líquidos en el cuerpo. Su función es dar firmeza, elasticidad y suavidad a la piel, previniendo y mejorando el estado de la misma. Por esta razón, previene y mejora la celulitis. No contiene ni sustancias químicas, ni colorantes, ni conservantes. Es apto para veganos y no está testado en animales.'],
    ['../img/7.jpg', 'Aceite antiinflamatorio S.O.S Rescate', '30ML', 12.45, 'Sale a: 415,00 €/L', 'Pequeñas heridas, quemaduras, golpes, cicatrices… ¿Cuántos productos diferentes estás usando para paliar estos accidentes? Pues a partir de ahora con uno sólo podrás calmar y regenerar tu piel y la de toda tu familia con S. O. S. Rescate, una extraordinaria mezcla de aceites vegetales y esenciales procedentes de agricultura ecológica.'],
    ['../img/8.jpg', 'Aceite Bucal de Coco Orgánico Premium', '180ML', 9.60, 'Sale a: 53,33 €/L', 'Oil Pulling de Dr. Goerg. El aceite bucal de coco orgánico premium de Dr. Goerg es fácil de usar y, gracias a sus ingredientes 100 % naturales enriquecidos con aceites esenciales de menta y eucalipto, garantiza una sensación en la boca limpia, agradable y fresca. Nuestro aceite bucal orgánico premium también es 100% vegano y está certificado como cosmético orgánico por Cosmos Organic . Si se usa regularmente antes de cepillarse los dientes, la extracción de aceite puede garantizar un aliento fresco y encías bien cuidadas a largo plazo. Al igual que con todos nuestros productos orgánicos premium, solo utilizamos las mejores materias primas de cultivos exclusivamente sostenibles para nuestro aceite de boca de coco orgánico premium.'],
    ['../img/9.jpg', 'Aceite corporal blanco siberiano anticelulítico de Natura Siberica', '200ML', 6.95, 'Sale a: 34,75 €/L', 'Este producto te trae lo mejor para el cuidado de tu cuerpo gracias a las propiedades de la cera blanca de abeja, los aceites naturales y la schizandra. Regálate lo mejor para tu piel y disfruta de esta combinación que hidratará de forma eficaz las zonas de tu cuerpo que más lo necesite.'],
    ['../img/10.jpg', 'Aceite corporal Body Sculptor', '100ML.', 73.70, 'Sale a: 491,33 €/L', 'Aceite corporal que moldea el cuerpo y esculpe la silueta de forma natural y eficaz. Previene el exceso de peso y la retención de líquidos gracias a su acción drenante, activa la microcirculación a la vez que tonifica la piel. Esculpe tu cuerpo realizando tratamientos de forma diaria. Está formulado con aceites vegetales naturales adecuado para pieles sensibles.'],
    ['../img/11.jpg', 'Aceite corporal de almendras dulces', '500ML', 10.45, 'Sale a: 20,90 €/L', 'El Aceite de Almendras dulces es básico para una hidratación y nutrición de la piel. Puedes utilizarlo en todas las partes de tu cuerpo preferiblemente después de la ducha con la piel húmeda, para ayudar a su absorción llegando a las capas profundas de la piel. Un aceite neutro apto para todo tipo de pieles y edades, utilizándose para toda la familia desde las edades más tempranas. Es ideal como base para formularlo con otros aceites, aceites esenciales y lociones.'],
    ['../img/12.jpg', 'Aceite corporal de almendras dulces con dosificador 1L', '1L', 14.99, 'Sale a: 14,99 €/L', 'El Aceite de Almendras dulces es básico para una hidratación y nutrición de la piel. Puedes utilizarlo en todas las partes de tu cuerpo preferiblemente después de la ducha con la piel húmeda, para ayudar a su absorción llegando a las capas profundas de la piel. Un aceite neutro apto para todo tipo de pieles y edades, utilizándose para toda la familia desde las edades más tempranas. Es ideal como base para formularlo con otros aceites, aceites esenciales y lociones.'],
    ['../img/13.jpg', 'Aceite corporal de almendras dulces con dosificador 500ml', '500ML', 11.55, 'Sale a: 23,10 €/L', 'El Aceite de Almendras dulces es básico para una hidratación y nutrición de la piel. Puedes utilizarlo en todas las partes de tu cuerpo preferiblemente después de la ducha con la piel húmeda, para ayudar a su absorción llegando a las capas profundas de la piel. Un aceite neutro apto para todo tipo de pieles y edades, utilizándose para toda la familia desde las edades más tempranas. Es ideal como base para formularlo con otros aceites, aceites esenciales y lociones.'],
    ['../img/14.jpg', 'Aceite Corporal de Granada', '100ML', 22.90, 'Sale a: 229,00 €/L', 'El aceite corporal de granada es de acción antioxidante intensiva que sirve para la regeneración celula, reafirmando y mejorando la elasticidad. Está indicado para pieles secas, maduras y estresadas, pues ayuda a prevenir el envejecimiento prematuro de la piel. Con ingredientes 100% naturales y ecológicos, que otorgan un aroma sensual y dulce. Testado dermatológicamente, no testado en animales. Apto para veganos.'],
    ['../img/15.jpg', 'Aceite Corporal de Rosa Mosqueta', '100ML', 22.90, 'Sale a: 229,00 €/L', 'La principal acción de la Rosa Mosqueta es la regeneración de la piel y elasticidad, aportando tonicidad a la piel. Combate los primeros signos de envejecimiento de la piel. Este producto combina la acción alisante de la rosa mosqueta con las propiedades hidratantes del aceite de jojoba. Da como resultado un aceite muy nutritivo, de una textura ligera y muy absorvente. Testado dermatológicamente en todo tipo de pieles, pero no en animales. Apto para veganos. De uso diario.'],
    ['../img/16.jpg', 'Aceite corporal Embellecedor del Busto', '100ML', 81.70, 'Sale a: 817,00 €/L', 'Aceite corporal empleado para moldear y realzar el busto dándole una apariencia de mayor volumen. Hidrata y nutre ayudando a prevenir las estrías de esta zona tan sensible. Utilízalo directamente con ligeros masajes circulares hasta su total absorción. Puedes utilizarlo de forma diaria, para mejores resultados te aconsejamos de dos a tres aplicaciones al día.'],
    ['../img/17.jpg', 'Aceite corporal Reafirmante de Tejidos', '100ML', 60.00, 'Sale a: 400,00 €/L', 'Aceite corporal indispensable para prevenir la pérdida de firmeza de los tejidos y reafirmar las zonas que presentan flacidez. Puedes hidratar tu cuerpo de forma diaria con este aceite y beneficiarte de sus propiedades reafirmantes. Con ingredientes totalmente naturales consigue una hidratación en las capas profundas de la piel.'],
    ['../img/18.jpg', 'Aceite corporal Reafirmante del Busto', '100ML', 81.70, 'Sale a: 817,00 €/L', 'Aceite corporal específico de tratamiento que reafirma eficazmente el seno caído a la vez que hidrata y suaviza la piel devolviéndole su belleza. El tratamiento natural con este aceite realza el busto para que se muestre más bello. Este aceite está libre de hormonas y otros componentes químicos, se basa en ingredientes naturales con propiedades hidratantes y estimuladoras.'],
    ['../img/19.jpg', 'Aceite corporal Reina de Egipto', '150ML', 57.30, 'Sale a: 382,00 €/L', 'Aceite corporal de exótica fragancia que nutre en profundidad, combate el envejecimiento cutáneo, regenera y alisa, a la vez que aporta autoestima y confianza. Este aceite es muy usado y recomendado entre nuestros clientes gracias a su versatilidad y eficacia.'],
    ['../img/20.jpg', 'Aceite daúrico corporal de Natura Siberica', '370ML', 18.95, 'Sale a: 51,22 €/L', 'Relaja tu cuerpo con este fantástico producto con el que podrás disfrutar de momentos únicos. Aceite daúrico corporal es perfecto para pieles secas. Una explosión de sensaciones gracias a su composición que revitalizará tu piel.'],
    ['../img/21.jpg', 'Aceite de Aguacate corporal', '125ML', 15.00, 'Sale a: 120,00 €/L', 'El aceite de aguacate actúa un bálsamo perfecto para la piel. Destaca por su efecto nutritivo, protector y regenerante. Indicado para pieles secas, agrietadas y envejecidas. Tiene una excelente penetración y además ayuda a filtrar de forma natural la radiación solar.'],
    ['../img/22.jpg', 'Aceite de almendras corporal Bio', '125ML', 14.95, 'Sale a: 119,60 €/L', 'Hidrata y nutre tu piel con este aceite de almendras ecológico de primera prensada en frío. Te recomendamos su uso después de la ducha con la piel húmeda, mejora su absorción. Puedes utilizarlo de base para formularlo con otro aceites, aceites esenciales y lociones.'],
    ['../img/23.jpg', 'Aceite de Argán Bio', '30ML', 12.99, 'Sale a: 433,00 €/L', 'Este aceite vegetal rico en vitaminas y antioxidantes te hará lucir una piel radiante. El aceite de argán te aportará la luminosidad y elasticidad que necesitas para presumir de belleza natural. Ideal para todo tipo de pieles y capaz de nutrir las capas profundas de la piel.'],
    ['../img/24.jpg', 'Aceite de Argán Bio', '100ML', 25.95, 'Sale a: 259,50 €/L', 'Este aceite vegetal rico en vitaminas y antioxidantes te hará lucir una piel radiante. El aceite de argán te aportará la luminosidad y elasticidad que necesitas para presumir de belleza natural. Ideal para todo tipo de pieles y capaz de nutrir las capas profundas de la piel.'],
    ['../img/25.jpg', 'Aceite de CBD 5%', '15ML', 20.95, 'Sale a: 20,95 €/ud.', 'Aceite de semillas de cáñamo con CBD al 5%. Adecuado para el uso diario en personas con dolor crónico o de intensidad alta. El aceite de cáñamo con CBD de Terra Verda es orgánico, vegano y libre de crueldad animal. Su exclusivo método de extracción permite mantener todas las propiedades de la semilla de cáñamo sin trazos de tóxicos ni alcoholes. Puedes usarlo diariamente para aliviar las dolencias articulares o musculares por el dolor crónico, días estresantes o la actividad deportiva.'],
 /*    ['../img/1.jpg', 'Producto26', '30', 103], ['../img/2.jpg', 'Producto27', '30', 103], ['../img/3.jpg', 'Producto28', '30', 103],
    ['../img/4.jpg', 'Producto29', '30', 103], ['../img/5.jpg', 'Producto30', '30', 103], ['../img/6.jpg', 'Producto31', '30', 103],
    ['../img/7.jpg', 'Producto32', '30', 103], ['../img/8.jpg', 'Producto33', '30', 103], ['../img/9.jpg', 'Producto34', '30', 103],
    ['../img/10.jpg', 'Producto35', '30', 103], ['../img/11.jpg', 'Producto36', '30', 103], ['../img/12.jpg', 'Producto37', '30', 103],
    ['../img/13.jpg', 'Producto38', '30', 103], ['../img/14.jpg', 'Producto39', '30', 103], ['../img/15.jpg', 'Producto40', '30', 103],
    ['../img/16.jpg', 'Producto41', '30', 103], ['../img/17.jpg', 'Producto42', '30', 103], ['../img/18.jpg', 'Producto43', '30', 103],
    ['../img/19.jpg', 'Producto44', '30', 103], ['../img/20.jpg', 'Producto45', '30', 103], ['../img/21.jpg', 'Producto46', '30', 103],
    ['../img/22.jpg', 'Producto47', '30', 103], ['../img/23.jpg', 'Producto48', '30', 103], ['../img/24.jpg', 'Producto49', '30', 103],
    ['../img/25.jpg', 'Producto50', '30', 103], ['../img/1.jpg', 'Producto51', '30', 103], ['../img/2.jpg', 'Producto52', '30', 103],
    ['../img/3.jpg', 'Producto53', '30', 103], ['../img/3.jpg', 'Producto54', '30', 103], ['../img/5.jpg', 'Producto55', '30', 103],
    ['../img/6.jpg', 'Producto56', '30', 103], ['../img/7.jpg', 'Producto57', '30', 103], ['../img/25.jpg', 'Producto58', '30', 103],
    ['../img/1.jpg', 'Producto59', '30', 103], ['../img/2.jpg', 'Producto60', '30', 103], ['../img/3.jpg', 'Producto61', '30', 103],
    ['../img/3.jpg', 'Producto62', '30', 103], ['../img/5.jpg', 'Producto63', '30', 103],
    ['../img/6.jpg', 'Producto65', '30', 103], ['../img/6.jpg', 'Producto66', '30', 103] */
]

let carrito = [/* ['../img/3.jpg', 'Producto62', '30', 103, '', '', 1], ['../img/5.jpg', 'Producto63', '30', 103, '', '', 1],
                ['../img/6.jpg', 'Producto65', '30', 103, '', '', 1], ['../img/6.jpg', 'Producto66', '30', 103, '', '', 1] */];
const nombres = ['David', 'Miguel', 'Jesus', 'Lenin'];
const apellidos = ['Sepulveda', 'Sepulveda', 'Sepulveda', 'Serrano'];
const usuarios = ['david@mail.com', 'usuario2@mail.com', 'usuario3@mail.com', 'usuario4@mail.com'];
const claves = ['clave1', 'clave2', 'clave3', 'clave4'];
let buscados = [];


/*====================MODAL=================================*/
const abrirModal = document.querySelector('.mdl');
const modal = document.querySelector('.modal');
const cerrarModal = document.querySelector('.cerrar');
const contenedor = document.querySelector('.contenedor');

abrirModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
    contenedor.style.background = "#f2f2f2";
})

cerrarModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
    contenedor.style.background = "#fff";
})



/* ======================REGISTRO================================= */
function registro(){
    let nombre, apellido, correo, clave1, clave2;
    nombre = document.getElementById('nombre').value;
    apellido = document.getElementById('apellido').value;
    correo = document.getElementById('correo').value;
    clave1 = document.getElementById('clave').value;
    clave2 = document.getElementById('clave2').value;
    let expresonesRegulares  = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    
    if(clave1 == clave2 && clave1 !== "" && clave2 !== ""){
        if(nombre !== " " && nombre.length > 3){
            nombres.push(nombre);
            console.log(nombres)
        }else{
            window.alert("El nombre debe de contener más de 3 caracteres");
        }
    
        if(apellido !== " " && apellido.length > 5){
            apellidos.push(apellido);
            console.log(apellidos)
        }else{
            window.alert("El apellido debe de contener más de 5 caracteres");
        }

        if(correo !== " " && correo.length > 3){
            usuarios.push(correo);
            console.log(usuarios);
        }else{
            window.alert("Introduzca un correo electronico");
        }

        if(((clave1.length >6) && ((clave1.search(/[a-z]/i))>1) && (clave1.search(/[0-9]/) >1))){
            claves.push(clave1);
            console.log(claves);
        }
        else{
            if(clave1.length<6){
                window.alert("la contraseña 1 debe de contener más de 6 caracteres");
            }
            if (clave1.search(/[a-z]/i) < 0) {
                window.alert("Su contraseña debe contener al menos una letra.");
            }
            if (clave1.search(/[0-9]/) < 0) {
                window.alert("Su contraseña debe contener al menos un numero."); 
            }
        }
        window.alert(nombre + " Fuiste registrado exitosamente")
        window.location= "../html/index.html";
    }
    else{
        window.alert("las contraseñas no coinciden");
    }
   
        
}


/* ========================LOG IN========================== */
function login(){
    let usuario = document.getElementById("correo").value;
    let pass = document.getElementById("clave").value;
    for(let i=0; i<usuarios.length; i++){
        if(usuario!=="" && pass!=="" ){
            if(usuario==usuarios[i] && pass==claves[i]){
                window.alert(nombres[i]+ " "+ apellidos[i]+" Ingreso a la plataforma.");
                window.location="../html/index.html"
                break;
            }
        }
        else{
            window.alert("Complete los campos.");
            break;
        }
    }
}


/* ============================FILTRAR PRECIOS=========================== */
let booleanBuscar = false;
let pagActual = 1;
let indexPag = 1;

let buscar = document.getElementById("btnBuscar");
let rangoInput = document.querySelectorAll(".rango-input input"),
    priceInput = document.querySelectorAll(".precioEntrada input"),
    rango = document.querySelector(".slider .progreso");
let priceGap = 5;
let btnAtras = document.getElementById("btnAtras");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btnAdelante = document.getElementById("btnAdelante");

btn1.addEventListener("click", () => cambiarPagina(1));
btn2.addEventListener("click", () => cambiarPagina(2));
btn3.addEventListener("click", () => cambiarPagina(3));
btn4.addEventListener("click", () => cambiarPagina(4));
btn5.addEventListener("click", () => cambiarPagina(5));
btnAtras.addEventListener("click", () => cambiarPagina(6));
btnAdelante.addEventListener("click", () => cambiarPagina(7));

let filtrar = document.getElementById("filtrar");

filtrar.addEventListener("click", filtrarPrecios);


buscar.addEventListener("click", () => buscar_productos());

function buscar_productos() {
    buscados = [];
    let temp = "";
    let busqueda = String(document.getElementById("buscar").value.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
    if (busqueda.length > 0) {
        for (let i = 0; i < products.length; i++) {
            temp = String(products[i][1].toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
            if (temp.includes(busqueda)) {
                buscados[buscados.length] = products[i];
            }
        }
        booleanBuscar = true;
    } else {
        booleanBuscar = false;
    }
    mostrarProductos(0);
}

/* ===================MOSTRAR PRODUCTOS========================= */

function mostrarProductos(index) {
    let constIndex = index;
    let productos;
    if (booleanBuscar) {
        productos = buscados;
    } else {
        productos = products;
    }
    let elementos = "";
    let container = document.getElementById("tarjetas");
    paginacion(Math.ceil(productos.length / 12), pagActual);
    for (let i = 0; i <= 11; i++) {
        if (index >= productos.length) {
            break;
        }
        elementos += "<div class='tarjeta'>" +
            "   <div class='dto'>"+
            "       <p class='descuento'><b>-50%</b></p>"+
            "       <p><b>2°und</p>"+
            "   </div>"+
            "   <div class='thumb'>" +
            "       <i class='fa-solid fa-heart'></i>" +
            "       <img src='" + productos[index][0] + "' alt='producto1' height='250'>" +
            "   </div>" +
            "   <div class='informacion'>" +
            "        <h3 class='tituloProductos'>" + productos[index][1].substring(0, 20) + "..." + "</h3>" +
            "        <h5 class='medidas'>" + productos[index][2] + "</h5>" +
            "        <p class='descripcion'>Natura Siberica</p>" +
            "        <h3 class='precio'>" + productos[index][3] + "€</h3>" +
            "        <a  id='anadirCarro'  onclick='activar("+i+")' class='anadirCarro' data-id='" + (index + 1) + "'><i class='fa-solid fa-basket-shopping'></i> Añadir a la cesta</a>" +
            "   </div>" +

            "   </div>";
        index++;
    }
    container.innerHTML = elementos;
};

window.onload = mostrarProductos(0);
window.onload = maximoPrecioSlide();
window.onload = carro();


/* ====================PRODUCTOS EN EL CARRITO===================== */

function carro() {
    let productos = "";
    let contenedor = document.getElementById("items");
    for (let i = 0; i < carrito.length; i++) {
        productos += "<div class='itemP' id='itemP'>" +
            "    <div class='thumb'>" +
            "        <img src='" +carrito[i][0]+ "' alt='' height='100'>" +
            "    </div>" +
            "    <div class='informacion'>" +
            "        <h4 class='titulo'>" +carrito[i][1]+ "</h4>" +
            "        <p class='medida'>" +carrito[i][2]+ "</p>" +
            "        <label for='cantidadProducto'>Cantidad</label>" +
            "        <input type='number' class='cantidadProducto' value='" +carrito[i][6]+ "' name='cantidadProducto' id='cantidadProducto'  min='0' max='100'>" +
            "    </div>" +
            "    <p class='precio' id='precio'>" +carrito[i][3]+ "$</p>" +
            "    <i onclick='eliminar("+i+")' id='quitarProducto' class='fa-solid fa-trash quitarProducto'></i>" +
            "</div>";
    }

    contenedor.innerHTML = productos;
}

function activar(i) {
    let temp = products[parseInt(i)].slice();
    temp[temp.length] = 1;
    carrito[carrito.length] = temp;
    carro();
}
function eliminar(index) {
    carrito.splice(parseInt(index),1);
    carro();
}


function maximoPrecioSlide() {
    let maximo = parseFloat(products[0][3]);
    for (let i = 1; i < products.length; i++) {
        if (parseFloat(products[i][3]) > maximo) {
            maximo = parseFloat(products[i][3]);
        }
    }
    maximo = Math.ceil(maximo);
    rangoInput[0].value = 0;
    rangoInput[1].value = parseFloat(maximo) - 1;
    rangoInput[0].max = parseFloat(maximo);
    rangoInput[1].max = parseFloat(maximo);
    priceInput[0].value = 0;
    priceInput[1].value = maximo - 1;
    rango.style.left = 0 + "%";
    rango.style.right = 100 - (rangoInput[1].value / rangoInput[1].max) * 100 + "%";
}
priceInput.forEach(input => {
    input.addEventListener("input", e => {
        let minPrice = parseInt(priceInput[0].value),
            maxPrice = parseInt(priceInput[1].value);

        if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangoInput[1].max) {
            if (e.target.className === "input-min") {
                rangoInput[0].value = minPrice;
                rango.style.left = ((minPrice / rangoInput[0].max) * 100) + "%";
            } else {
                rangoInput[1].value = maxPrice;
                rango.style.right = 100 - (maxPrice / rangoInput[1].max) * 100 + "%";
            }
        }
    });
});
rangoInput.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(rangoInput[0].value),
            maxVal = parseInt(rangoInput[1].value);
        if ((maxVal - minVal) < priceGap) {
            if (e.target.className === "rango-min") {
                rangoInput[0].value = maxVal - priceGap
            } else {
                rangoInput[1].value = minVal + priceGap;
            }
        } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            rango.style.left = ((minVal / rangoInput[0].max) * 100) + "%";
            rango.style.right = 100 - (maxVal / rangoInput[1].max) * 100 + "%";
        }
    });
});

function filtrarPrecios() {
    let min = rangoInput[0].value;
    let max = rangoInput[1].value;
    buscados = [];
    for (let i = 0; i < products.length; i++) {
        if (parseFloat(products[i][3]) <= parseFloat(max) && parseFloat(products[i][3]) >= parseFloat(min)) {
            buscados[buscados.length] = products[i];
        }
    }
    booleanBuscar = true;
    mostrarProductos(0);
}

function paginacion(num, pagActual) {
    botonesBlancos();
    if (num <= 5) {
        if (num != 5) {
            mostrarOcultarBotones("hidden");
            let index = 5;
            for (let i = 0; i < num; i++) {
                document.getElementById("btn" + String(index)).innerHTML = num - i;
                document.getElementById("btn" + String(index)).style.visibility = "visible";
                index--;
                if ((num - i) == pagActual) {
                    document.getElementById("btn" + String(index + 1)).style.background = "#5ccb5f";
                    document.getElementById("btn" + String(index + 1)).style.color = "#fff";
                    indexPag = num - i;
                }
            }
        } else {
            btnAtras.style.visibility = "hidden";
            btnAdelante.style.visibility = "hidden";
            document.getElementById("btn" + String(pagActual)).style.background = "#5ccb5f";
            document.getElementById("btn" + String(pagActual)).style.color = "#fff";
        }
    } else {
        let index;
        if ((pagActual + 4) <= 5) {
            index = pagActual + 4;
        } else {
            index = num;
        }
        for (let i = 0; i < 5; i++) {
            document.getElementById("btn" + String(5 - i)).innerHTML = index - i;
            document.getElementById("btn" + String(5 - i)).style.visibility = "visible";
            if (document.getElementById("btn" + String(5 - i)).textContent == pagActual) {
                document.getElementById("btn" + String(5 - i)).style.background = "#5ccb5f";
                document.getElementById("btn" + String(5 - i)).style.color = "#fff";
                indexPag = 5 - i;
            }
        }
        mostrarOcultarBotones("visible");
        if (pagActual == 1) {
            btnAtras.style.visibility = "hidden";
        } else if (document.getElementById("btn" + String(indexPag)).textContent == num) {
            btnAdelante.style.visibility = "hidden";
        }
    }
}

function mostrarOcultarBotones(visibilidad) {
    btnAtras.style.visibility = visibilidad;
    btn1.style.visibility = visibilidad;
    btn2.style.visibility = visibilidad;
    btn3.style.visibility = visibilidad;
    btn4.style.visibility = visibilidad;
    btn5.style.visibility = visibilidad;
    btnAdelante.style.visibility = visibilidad;
}

function botonesBlancos() {
    btn1.style.background = "#fff";
    btn1.style.color = "#000";
    btn2.style.background = "#fff";
    btn2.style.color = "#000";
    btn3.style.background = "#fff";
    btn3.style.color = "#000";
    btn4.style.background = "#fff";
    btn4.style.color = "#000";
    btn5.style.background = "#fff";
    btn5.style.color = "#000";
}

function cambiarPagina(index) {
    let pagina = 0;
    switch (index) {
        case 1:
            pagina = parseInt(document.getElementById("btn1").textContent);
            indexPag = pagina;
            pagActual = pagina;
            mostrarProductos((pagina - 1) * 12);
            break;
        case 2:
            pagina = parseInt(document.getElementById("btn2").textContent);
            indexPag = pagina;
            pagActual = pagina;
            mostrarProductos((pagina - 1) * 12);
            break;
        case 3:
            pagina = parseInt(document.getElementById("btn3").textContent);
            indexPag = pagina;
            pagActual = pagina;
            mostrarProductos((pagina - 1) * 12);
            break;
        case 4:
            pagina = parseInt(document.getElementById("btn4").textContent);
            indexPag = pagina;
            pagActual = pagina;
            mostrarProductos((pagina - 1) * 12);
            break;
        case 5:
            pagina = parseInt(document.getElementById("btn5").textContent);
            indexPag = pagina;
            pagActual = pagina;
            mostrarProductos((pagina - 1) * 12);
            break;
        case 6:
            if (indexPag > 1) {
                indexPag -= 1;
                pagina = parseInt(document.getElementById("btn" + String(indexPag)).textContent);
                pagActual = pagina;
            } else {
                pagActual -= 1;
            }
            mostrarProductos((pagActual - 1) * 12);
            break;
        case 7:
            indexPag += 1;
            pagina = parseInt(document.getElementById("btn" + String(indexPag)).textContent);
            pagActual = pagina;
            mostrarProductos((pagina - 1) * 12);
            break;
    }
}
