//ponemos en una variable las validaciones que necesitamos
//https://github.com/validatorjs/validator.js Para buscar
const path = require("path");
const {body} = require("express-validator");//para validar solo lo que nos pasa el body//Tambien en vez de body podemos usar check()

const validations =[
    body('name').notEmpty().withMessage('Tienes que escribir el nombre del producto'),  //firstName sale del name de ejs. notEmty es una validacion, valida si el campo esta vacio
    body('price').notEmpty().withMessage('Tienes que escribir un precio').bail()//bail es para detener la ejecucion
                .isCurrency().withMessage('Tienes que escribir un numero correcto'),//withMessage: para cambiar el mesaje de error
    body('category').notEmpty().withMessage('Tienes que escribir un numero para el descuento'),//.bail()//bail para que cote la ejecicion, en este caso si hay un campo vacio
      //              .isCurrency().withMessage('Tienes que escribir un numero correcto. Ej: 123'),
    body('image').custom((value, {req})=> {
        let file = req.file;
        /* console.log(file) */
        let aceptedExtensions = ['.jpg', '.png', '.gif', '.jpeg'];
        
        if (file){
            let fileExtension = path.extname(file.originalname);
            if (!aceptedExtensions.includes(fileExtension)){
                throw new Error(`Las extensiones de archivo permitidos son ${aceptedExtensions.join(', ')}`)
            }
        }
        return true
    })
];
module.exports = validations;