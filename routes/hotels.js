const express = require("express");
const router = express.Router();
const adminAuth = require('../middleware/adminAuth')
const userAuth = require('../middleware/userAuth')
const hotelOp = require('../controllers/hotels.controller')
/**  
 * @swagger
 *   tags:
 *      name: Hotel
 *      description: API's to manage hotels.
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          hotels:
 *              type: object
 *              properties:
 *                  _id:
 *                      type: integer
 *                  hotel:
 *                      type: string
 *                  location:
 *                      type: string
 *                  stars:
 *                      type: integer
 *                  room:
 *                      type: schema
 *                  Access-token:
 *                      type: string
 */


/**
 * @swagger
 * /hotels:
 *  post:
 *      tags: [Hotel]
 *      summary: To add hotels to the database
 *      description: This is used to add the hotel to the database
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/hotels'
 *      responses:
 *          '201':
 *              description: Added successfully
 *               
 */
router.post('/hotels',adminAuth,hotelOp.hotels)


/**
 * @swagger
 * /hotels:
 *  get:
 *    tags: [Hotel]
 *    summary: To get list of all avaiable hotels.
 *    description: This api is used to fetch the data from mongodb. 
 *    responses:
 *      '200':
 *        description: A successful response
 *        content:
 *            application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          $ref: '#components/schemas/hotels'
 */
router.get('/hotels',hotelOp.hotelList);
router.delete('/hotels/:Name',adminAuth,hotelOp.deleteHotel)

/**
 * @swagger
 *  components:
 *      schemas:
 *          booking:
 *              type: object
 *              properties:
 *                  _id:
 *                      type: integer
 *                  hotel:
 *                      type: string  
 *                  checkin:
 *                      type: date
 *                  checkout:
 *                      type: date
 *                  guests:
 *                      type: integer
 *                  Acess-token:
 *                      type: string
 */
/**
 * @swagger
 * /bookings:
 *  get:
 *    tags: [Hotel]
 *    summary : To get list of all bookings.
 *    description: This api is used to fetch the data from mongodb.
 *    responses:
 *      '200':
 *        description: A successful response
 *        content:
 *            application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          $ref: '#components/schemas/booking'
 */
router.get('/bookings',userAuth,hotelOp.bookingList)
/**
 * @swagger
 * /bookings:
 *  post:
 *      tags: [Hotel]
 *      summary: To book the hotel
 *      description: This is used to add the booking to the database
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/booking'
 *      responses:
 *          '201':
 *              description: Booking successfully added
 *               
 */
router.post('/bookings',hotelOp.hotelBooking)


router.post('/rooms',hotelOp.rooms)
/**
 * @swagger
 * /hotelByName:
 *  get:
 *      tags: [Hotel]
 *      summary: To get the hotel by name
 *      description: This is used to search the hotel by an specific name
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/booking'
 *      responses:
 *          '201':
 *               
 */
router.get('/hotelByName/:Name',hotelOp.hotelByName)
router.get('/',(req,res) => {
    res.send('It help you to get the best hotel near by you')
})
module.exports = router;