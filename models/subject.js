module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("subject", {
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    
  });
};