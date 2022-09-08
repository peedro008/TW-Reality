const { DataTypes } = require('sequelize');

const User= (sequelize)=>{
    sequelize.define('Users', {
        name: {
            type:DataTypes.STRING,
            allowNull: false,
            unique: true
            
        },
            email:{
                type:DataTypes.STRING,
                allowNull: false,
                unique: true
                
            },
            password:{
                type:DataTypes.STRING,
                allowNull: false
            },
            ReferredId:{
                type:DataTypes.INTEGER,
                allowNull: true
            },
    UserRole:{
    type:DataTypes.ENUM("Admin", "Vendedor"),
    allowNull:false
    },
    deleted:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }   
});
};
module.exports= User;