module.exports = function(sequelize, DataTypes) {
  var Author = sequelize.define("students", {
    // Giving the Author model a name of type STRING
    name: { 
    	type: DataTypes.STRING,
    	allowNull: false,
    	validate: {
    		len:[1] 
    	}
    },
    email: {
    	type:DataTypes.STRING,
    	allowNull: false,
    	validate: {
    		len:[1] 
    	}
    },
    subject: {
    	type:DataTypes.STRING,
    	allowNull: false,
    	validate: {
    		len:[1] 
    	}
    },
  });

};