module.exports = (sequelize, DataTypes) =>{
    let alias = "Movies";
    let cols ={
        id: {
            type: DataTypes.INTEGER, //definimos las propiedades de las comna de db
            primaryKey: true,
            autoIncrement: true
        },
        title:{type: DataTypes.STRING},
        genre_id: {
            type: DataTypes.STRING
        },
        rating:{
            type: DataTypes.INTEGER
        },
        awards:{
            type: DataTypes.DOUBLE
        },
        release_date:{
            type: DataTypes.DATE}
            ,
        length:{
            type: DataTypes.INTEGER
        }
    };
    let config = {
        tableName: "movies",//esto se pone porque lo general el nombbre de la tabla el mismo nombre que el js
        timestamps: false //es  por si no tiene las tablas createdate y update
    }

    const Movies = sequelize.define(alias, cols, config);

            //Definimos las relaciones o asociaciones
            Movies.associate = models =>{
                //peliculas tiene un solo genero
                Movies.belongsTo(models.Genres,{ //belongsTo: pertence a un solo genero. es una relacion de uno a muchos
                    as: "genero",
                    foreignKey: "genre_id",
                });    
                //pelicula tiene muchos actores
                Movies.belongsToMany(models.Actors,{ //belongsToMany: de muchos a muchos. generos tiene muchas pelicualas
                    as: "actores",
                    through: "actor_movie",//tabla intermedia
                    foreignKey: "movie_id",
                    otherKey: "actor_id",
                    timestamps: false
                });         
                
            }

    return Movies;


}