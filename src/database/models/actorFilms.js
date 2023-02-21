module.exports = (sequelize, DataTypes) =>{
    let alias = "ActoresPeliculas";
    let cols ={
        id: {
            type: DataTypes.INTEGER, 
            primaryKey: true,
            autoIncrement: true
        },
        actor_id:{
            type: DataTypes.INTEGER
        },
        movie_id:{
            type: DataTypes.INTEGER
        }
    };
    let config = {
        tableName: "actor_movie",//esto se pone porque lo general el nombbre de la tabla el mismo nombre que el js
        timestamps: false //es  por si no tiene las tablas createdate y update
    }

    const ActoresPeliculas = sequelize.define(alias, cols, config);

    return ActoresPeliculas;
}