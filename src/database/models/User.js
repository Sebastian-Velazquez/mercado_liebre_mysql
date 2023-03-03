module.exports = (sequelize, DataTypes) =>{
    let alias = "Users";
    let cols ={
        id: {
            type: DataTypes.INTEGER, //definimos las propiedades de las comna de db
            primaryKey: true,
            autoIncrement: true
        },
        email:{
            type: DataTypes.STRING
        },
        password:{
            type: DataTypes.STRING
        }
    }
    let config = {
        tableName: "users",//esto se pone porque lo general el nombbre de la tabla el mismo nombre que el js
        timestamps: false //es  por si no tiene las tablas createdate y update
    }

    const Users = sequelize.define(alias, cols, config);

    return Users;
}