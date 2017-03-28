// Dependencies
// =============================================================

module.exports = function(sequelize, DataTypes) {
    var CraveFood = sequelize.define("CraveFood", {
        dish_name: {
            type: DataTypes.STRING,
            allowNull:false,
            validate: {
                len:[1,140]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue:false,
            
        }
    });
    return CraveFood;
};

