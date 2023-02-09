module.exports = (sequelize, DataTypes) =>{
    let alias = "Peliculas";
    let cols ={
        id: {
            type: DataTypes.INTEGER, //definimos las propiedades de las comna de db
            promaryKey: true,
            autoIncrement: true
        },
        
    }


    const Movies = sequelize.define(alias, cols, config);

    return Movies;


}