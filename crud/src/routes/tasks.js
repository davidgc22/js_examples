const express = require('express');
const taskControles = require('../controles/taskcontroles');

const router = express.Router();

router.get('/tasks', taskControles.index);
router.get('/create', taskControles.create);
router.post('/create', taskControles.store);
router.post('/tasks/delete', taskControles.destroy);
router.get('/tasks/edit/:id', taskControles.edit);
router.post('/tasks/edit/:id', taskControles.update);

module.exports = router;