const { Profile } = require('../models');

exports.createProfile = async (req, res, next) => {
  try {
    console.log(req.body);
    const { name, email, phoneNum, salary, education, gender, age } = req.body;
    if (name && email && phoneNum) {
      // console.log('create');
      const profile = await Profile.create({
        name,
        email,
        phoneNum,
        salary,
        education,
        gender,
        age,
      });

      res
        .status(201)
        .json({ message: 'profile created id :' + profile.id, profile });
    } else {
      res
        .status(404)
        .json({ message: 'profile needed name && email && phoneNumber ' });
    }
  } catch (err) {
    console.log(err);
  }
};
exports.fetchAllprofile = async (req, res, next) => {
  try {
    const profile = await Profile.findAll();
    if (profile) {
      res.status(200).json({ message: 'sucess Get all profiles', profile });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.getProfilebyId = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const profile = await Profile.findOne({ where: { id: id } });
    console.log(profile);
    if (profile) {
      res
        .status(200)
        .json({ message: 'sucess Get  profiles id ' + profile.id, profile });
    } else res.status(404).json({ message: 'profile not found' });
  } catch (err) {
    console.log(err);
  }
};
exports.deleteProfilebyId = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const profile = await Profile.findOne({ where: { id: id } });
    console.log(profile);
    if (profile) {
      await Profile.destroy({ where: { id: id } });
      res.status(201).json({ message: 'profile deleted Id' + id });
    } else res.status(404).json({ message: 'profile not found' });
  } catch (err) {
    console.log(err);
  }
};
