module.exports = function(sequelize, DataTypes) {
  var Tutor = sequelize.define("Tutors", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    }
  },


  
{
    classMethods: {
      associate: function(models) {
        Tutor.hasMany(models.Availability, {
            onDelete: "CASCADE",
            hooks: true,
            foreignKey: {
              allowNull: true
            }
        })
      }

  }

})



  


  return Tutor;
}