const { DataTypes } = require('sequelize');

const Sell= (sequelize)=>{
    sequelize.define('Sell', {
        UserId: {
            type:DataTypes.INTEGER,
            allowNull: false
            
        },
            VentaId:{
                type:DataTypes.STRING,
                allowNull: false,
                unique: true
                
            },
        deleted:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }   
});
};
module.exports= Sell;