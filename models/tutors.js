module.exports = function(sequelize, DataTypes) {

  var Tutor = sequelize.define("Tutors", {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
      name: { 
          type: DataTypes.STRING,
          required: true,
          validate: {
          len:[1] 
          }
        },
          // email: {
          //  type:DataTypes.STRING,
          //  allowNull: false,
          //  validate: {
          //    len:[1] 
          //  }
          // },
      subject: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len:[1]
        }
      },
        // startTime: {
        // type: DataTypes.,
        // allowNull: false,
        // defaultValue: false
        //   },
        day: {
          type: DataTypes.STRING
        }
  })


  
// {
//     classMethods: {
//       associate: function(models) {
//         Tutor.hasMany(models.Availability, {
//             onDelete: "CASCADE",
//             hooks: true,
//             foreignKey: {
//               allowNull: true
//             }
//         })
//       }

//   }





  


  return Tutor;
}

