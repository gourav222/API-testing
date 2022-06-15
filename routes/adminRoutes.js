
const express = require('express');
const router = express.Router();
const adminOp = require('../controllers/admin.controller');
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
/**  
 * @swagger
 *   tags:
 *      name: Admin
 *      description: API's to manage Admin.
 */
/**
 * @swagger
 *  components:
 *      schemas:
 *          admin:
 *              type : object
 *              properties:
 *                  Name: 
 *                      type: string
 *                  email:
 *                      type: string
 *                  contact:
 *                      type: integer
 *                  password:
 *                      type: string     
 *                  
 */

/**
 * @swagger
 * /admins:
 *  get:
 *    tags: [Admin]
 *    summary: To get list of all registered admins.
 *    description: This api is used to fetch the data from mongodb. 
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
router.get('/admins',adminOp.adminList)
/**
 * @swagger
 * /adminLogin:
 *  post:
 *      tags: [Admin]
 *      summary: Admin login
 *      description: For admin login
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
router.post('/adminLogin',adminOp.adminLogin)
/**
 * @swagger
 * /adminRegister:
 *  post:
 *      tags: [Admin]
 *      summary: To add a new admin
 *      description: This is used to add the admin details to the database
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
router.post('/adminRegister',adminOp.adminRegistration )
/**
 * @swagger
 * /admin/:id:
 *  patch:
 *      summary: Update uadmin details
 *      tags: [Admin]
 *      description: For Updating admin's details
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/admin'
 *      responses:
 *          '201':
 *              description: admins details updated Successfully,
 *          '500':
 *              description: admins does not exist
 */
router.patch('/admin/:id',adminOp.updateAdminDetails)
module.exports = router;
