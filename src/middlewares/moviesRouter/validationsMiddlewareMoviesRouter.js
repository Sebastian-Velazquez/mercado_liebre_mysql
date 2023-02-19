//ponemos en una variable las validaciones que necesitamos
//https://github.com/validatorjs/validator.js Para buscar
//const path = require("path");
const {body} = require("express-validator");//para validar solo lo que nos pasa el body//Tambien en vez de body podemos usar check()

const validations =[
    body('titulo').notEmpty().withMessage('Tienes que escribir el nombre del producto'),  
    body('premio').notEmpty().withMessage('Tienes que escribir un cantidad de premios').bail()//bail es para detener la ejecucion
                .isCurrency().withMessage('Tienes que escribir un numero correcto'),//withMessage: para cambiar el mesaje de error
    body('genero').notEmpty().withMessage('Tienes que escribir el nombre del producto'),
    body('premio').notEmpty().withMessage('Tienes que escribir un cantidad de premios').bail()//bail es para detener la ejecucion
                .isCurrency().withMessage('Tienes que escribir un numero correcto'),
    body('duracion').notEmpty().withMessage('Tienes que escribir la cantidad de minutos que dura la pelicula').bail()
                .isCurrency().withMessage('Tienes que escribir un numero correcto'),//withMessage: para cambiar el mesaje de error
    body('rating').notEmpty().withMessage('Tienes que escribir el valor del rating').bail()
    .isCurrency().withMessage('Tienes que escribir un numero correcto'),//withMessage: para cambiar el mesaje de error
    /*body('image').custom((value, {req})=> {
        let file = req.file;
        let aceptedExtensions = ['.jpg', '.png', '.gif', '.jpeg'];
        
        if (file){
            let fileExtension = path.extname(file.originalname);
            if (!aceptedExtensions.includes(fileExtension)){
                throw new Error(`Las extensiones de archivo permitidos son ${aceptedExtensions.join(', ')}`)
            }
        }
        return true
    }) */
];
module.exports = validations;