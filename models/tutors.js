module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("tutors", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    availability: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });
};