const express = require('express')
const router = express.Router()
const { getFeedback, addFeedback, deleteFeedback } = require('../controllers/feedback') 

router
    .route('/')
    .get(getFeedback)
    .post(addFeedback);

router
    .route('/:id')
    .delete(deleteFeedback);

module.exports = router