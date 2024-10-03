const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync =require("../utils/wrapAsync.js");
const {validateReview,isLoggedIn,isReviewAuthor} = require("../middleware.js");
const reviewController = require("../controllers/review.js");


//Post Route
router.post("/:id/reviews", isLoggedIn,validateReview, wrapAsync(reviewController.createReview));
  
  //delete review route
 router.delete("/:id/reviews/:reviewId",isLoggedIn,isReviewAuthor,
    wrapAsync(reviewController.destroyReview));

  module.exports = router;