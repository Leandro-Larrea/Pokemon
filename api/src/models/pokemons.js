const { DataTypes } = require("sequelize")

module.exports = (sequelize) =>{
    sequelize.define("Pokemons", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNUll: false,
            primaryKey: true
        },
        createdAtDb:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNUll: false
        },
        hp:{
            type: DataTypes.INTEGER,
            allowNUll: false,
            validate:{
                min: 1,
                max: 200
            }
        },
        attack:{
            type: DataTypes.INTEGER,
            allowNUll: false,
            validate:{
                min: 1,
                max: 200
            }
        },
        defense:{
            type: DataTypes.INTEGER,
            allowNUll: false,
            validate:{
                min: 1,
                max: 200
            }
        },
        specialAttack:{
            type: DataTypes.INTEGER,
            allowNUll: false,
            validate:{
                min: 1,
                max: 200
            }
        },
        specialDefense:{
            type: DataTypes.INTEGER,
            allowNUll: false,
            validate:{
                min: 1,
                max: 200
            }
        },
        speed:{
            type: DataTypes.INTEGER,
            allowNUll: false,
            validate:{
                min: 1,
                max: 200
            }
        }
    })
}