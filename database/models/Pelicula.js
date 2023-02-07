module.exports = (sequelize, DataTypes) =>{
    let alias = "Peliculas"; //se pode en plurar al nombre del archivo js
    let cols ={//definimos las columas de las tablas
        id: {
            type: DataTypes.INTEGER, //definimos las propiedades de las comna de db
            promaryKey: true,
            autoIncrement: true
        },//si no definimos una.. es una que sequalize no va a recuperar.. no lo podes usar en el codigo
        title: {
            type: DataTypes.STRING
        },
        length: {
            type: DataTypes.INTEGER 
        },
    };
    let config = {
        tableName: "movies",//esto se pone porque lo general el nombbre de la tabla el mismo nombre que el js
        timestamps: false //es  por si no tiene las tablas createdate y update

    }
    const Pelicula = sequelize.define(alias, cols, config);

    return Pelicula;
}