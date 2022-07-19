const express = require('express');
const profileContoller = require('../controller/profile-controller');

const router = express.Router();

router.post('', profileContoller.createProfile);
router.get('/', profileContoller.fetchAllprofile);
router.get('/:id', profileContoller.getProfilebyId);
router.delete('/:id', profileContoller.deleteProfilebyId);
// router.get(
//   '/cartfetch/:id',
//   authuser.customer,
//   productsContoller.getProdictbyId
// );

module.exports = router;
