const express = require('express');
const authController = require('../controllers/authController');
const {
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
  getToursStats,
  getMonthlyPlan,
} = require('../controllers/tourController');

const router = express.Router();

router.route('/tour-stats').get(getToursStats);
router.route('/monthly-plan/:year').get(getMonthlyPlan);
router.route('/').get(authController.protect, getAllTours).post(createTour);
router
  .route('/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    deleteTour
  );

module.exports = router;
