module.exports = function(sequelize, DataTypes) {
  var Tutor = sequelize.define("tutors", {
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


  });

  // Tutor.associate = function(models) {
  //   Tutor.hasMany(models.Availability, {
  //     onDelete: "cascade"
  //   });
  // };
  return Tutor;
};