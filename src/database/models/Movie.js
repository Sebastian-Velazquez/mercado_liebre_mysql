module.exports = (sequelize, DataTypes) =>{
    let alias = "Movies";
    let cols ={
        id: {
            type: DataTypes.INTEGER, //definimos las propiedades de las comna de db
            primaryKey: true,
            autoIncrement: true
        },
        title:{
            type: DataTypes.STRING
        },
        genre_id: {
            type: DataTypes.STRING
        },
        rating:{
            type: DataTypes.INTEGER
        }
    };
    let config = {
        tableName: "movies",//esto se pone porque lo general el nombbre de la tabla el mismo nombre que el js
        timestamps: false //es  por si no tiene las tablas createdate y update
    }


    const Movies = sequelize.define(alias, cols, config);

    return Movies;


}