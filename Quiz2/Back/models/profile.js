module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define(
    'Profile',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: { type: DataTypes.STRING, allowNull: false },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      phoneNum: { type: DataTypes.STRING, unique: true, allowNull: false },
      salary: { type: DataTypes.STRING, allowNull: true },
      education: { type: DataTypes.STRING, allowNull: false },
      gender: {
        type: DataTypes.STRING,
      },
      age: {
        type: DataTypes.STRING,
      },
    },
    { underscored: true }
  );
  return Profile;
};
