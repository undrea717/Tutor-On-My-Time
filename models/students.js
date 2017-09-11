module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define("students", {
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
  return Student
};