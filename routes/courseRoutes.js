const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// CREATE
router.post('/', courseController.createCourse);

// READ ALL
router.get('/', courseController.getCourses);

// READ BY ID
router.get('/:id', courseController.getCourseById);

// UPDATE
router.put('/:id', courseController.updateCourse);

// DELETE
router.delete('/:id', courseController.deleteCourse);

module.exports = router;
