module.exports = (sequelize, DataTypes) =>{
    let alias = "Genres";
    let cols ={
        id:{
            type: DataTypes.INTEGER, //definimos las propiedades de las comna de db
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.INTEGER
        }
    };
    let config = {
        tableName: "genres",//esto se pone porque lo general el nombbre de la tabla el mismo nombre que el js
        timestamps: false //es  por si no tiene las tablas createdate y update
    }

    const Genres = sequelize.define(alias, cols, config);

    //Definimos las relaciones o asociaciones
    Genres.associate = models =>{
        //un genero tine muchas peliculas
        Genres.hasMany(models.Movies,{ //hasMany: uno a muchos generos tiene muchas pelicualas
            as: "peliculas",
            foreignKey: "genre_id"
        });      
        
    }

    return Genres;
}


/* Estructura basica:
module.exports = (sequelize, DataTypes) =>{
    let alias = "Nombres";
    let cols ={
        //propidades de las colunas
    };
    let config = {
        tableName: "nombre",//esto se pone porque lo general el nombbre de la tabla el mismo nombre que el js
        timestamps: false //es  por si no tiene las tablas createdate y update
    }

    const Nombres = sequelize.define(alias, cols, config);

    return Nombres;
}*/