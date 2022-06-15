const express = require("express");
const router = express.Router();
const userOp = require('../controllers/user.controller')
/**  
 * @swagger
 *   tags:
 *      name: User
 *      description: API's to manage User.
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          user:
 *              type : object
 *              properties:
 *                  email:
 *                      type: string
 *                  password:
 *                      type: string     
 */

/**
 * @swagger
 * /userLogin:
 *  post:
 *      tags: [User]
 *      summary: User login
 *      description: For user login
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/user'
 *      responses:
 *          '201':
 *              description: Added successfully
 *               
 */
router.post('/userLogin',userOp.userLogin)
/**
 * @swagger
 * /userRegister:
 *  post:
 *      tags: [User]
 *      summary: To add a user
 *      description: This is used to add the user details to the database
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/admin'
 *      responses:
 *          '201':
 *              description: Added successfully
 *               
 */
router.post('/userRegister',userOp.userRegistration)
/**
 * @swagger
 * /users:
 *  get:
 *    tags: [User]
 *    summary: To get list of all registered users.
 *    description: This api is used to fetch the data from mongodb
 *     
 *    responses:
 *      '200':
 *        description: A successful response
 *        content:
 *            application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          $ref: '#components/schemas/admin'
 */
router.get('/users',userOp.userList);
router.delete('/cancelBooking',userOp.cancelBooking)
/**
 * @swagger
 * /user/:id:
 *  patch:
 *      summary: Update users details
 *      tags: [User]
 *      description: For Updating user's details
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/admin'
 *      responses:
 *          '201':
 *              description: users details updated Successfully,
 *          '500':
 *              description: users does not exist
 */

router.patch('/user/:id',userOp.updateUsersDetails)
module.exports = router