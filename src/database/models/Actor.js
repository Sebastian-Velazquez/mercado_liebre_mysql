module.exports = (sequelize, DataTypes) =>{
    let alias = "Actors";
    let cols ={
        first_name: {
            type: DataTypes.STRING
        },
        last_name:{
            type: DataTypes.STRING
        },
    };
    let config = {
        tableName: "actors",//esto se pone porque lo general el nombbre de la tabla el mismo nombre que el js
        timestamps: false //es  por si no tiene las tablas createdate y update
    }

    const Actors = sequelize.define(alias, cols, config);

        //Definimos las relaciones o asociaciones
        Actors.associate = models =>{
            //actor tiene muchas peliculas
            Actors.belongsToMany(models.Movies,{ //belongsToMany: de muchos a muchos. generos tiene muchas pelicualas
                as: "peliculas",
                through: "actor_movie",//tabla intermedia
                foreignKey: "actor_id",
                otherKey: "movie_id",
                timestamps: false
            });      
            
        }

    return Actors;


}