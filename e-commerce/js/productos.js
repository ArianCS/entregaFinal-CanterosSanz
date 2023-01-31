const accesorios = [
    {id:1, nombre:"Polarizado de Vidrios", descripcion:"Cuidá los vidrios de tu nuevo auto ante cualquier riesgo de la calle.", precio:14000, imagen:"polarizado.jpg"},
    {id:2, nombre:"Camara de Reversa", descripcion:"Estaciona sin un solo rayon en la calle o estacionamiento con esta cámara de retroceso.", precio:10000, imagen:"camara-de-vision-trasera.jpg"},
    {id:3, nombre:"Bulones de Seguridad", descripcion:"Evitá que sustraigan tus neumáticos, con estos bulones solo una llave puede destrabarlos.", precio:7000, imagen:"1733-001-TUERCA-ANTIRROBO-AUTO.jpg"},
    {id:4, nombre:"LLantas de Aleación", descripcion:"Llantas de aleación es lo que destaca a tu auto por sobre el resto. El precio es por las 4 llantas.", precio:25000, imagen:"D_NQ_NP_788098-MLA43558704772_092020-O.jpg"},
    {id:5, nombre:"Color completo", descripcion:"Elegí ese color que te hace sentir especial, no lo dejes pasar.", precio:65000, imagen:"главная-6-1000x550.jpg"},
    {id:6, nombre:"Cubre Carter", descripcion:"Con este artículo, el motor va a viajar tranquilo sin la suciedad que pueda afectarle del exterior.", precio:15000, imagen:"cubre-carter-trk-acero-negro-4.jpg"},
    {id:7, nombre:"Manijas Cromadas", descripcion:"Dale un toque premium a tu vehículo, realmente marca la diferencia.", precio:100, imagen:"D_NQ_NP_609925-MLM49009681801_022022-V.jpg", categoria:"bebidas"},
    {id:8, nombre:"Tasa de ruedas", descripcion:"Llevate estas tasas de proteccion a precio promocional", precio:8000, imagen:"D_NQ_NP_828910-MLA48317212352_112021-O.jpg"},
    {id:9, nombre:"Red elástica para baúl", descripcion:"Esta red es todo lo que necesitas para llevar equipaje de modo seguro.", precio:2000, imagen:"D_NQ_NP_686969-MLA51808144612_102022-O.jpg"},
    {id:10, nombre:"Primer Mantenimiento", descripcion:"Te regalamos una primer revisión gratuita de tu auto a los 2000 kms para chequear que todo funcione correctamente. ¡Es Gratis!", precio:0, imagen:"images.png"}
];

const guardarProductosLS = (accesorios) => {
    localStorage.setItem("accesorios", JSON.stringify(accesorios));
}

const cargarProductosLS = () => {
    return JSON.parse(localStorage.getItem("accesorios")) || [];
}

guardarProductosLS(accesorios);