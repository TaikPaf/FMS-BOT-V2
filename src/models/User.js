const User = sequelize.define('User', {
    // Model attributes are defined here
    pseudo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    balance: {
      type: DataTypes.INTEGER
      // allowNull defaults to true
    }
  }, {
    // Other model options go here
  });
  