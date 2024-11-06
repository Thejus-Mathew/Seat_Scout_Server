const express = require('express')
const { registerAdmin, loginAdmin, updateAdmin } = require('../Controller/adminController')
const jwtMiddleware = require('../MiddleWare/jwtMiddleWare')
const router = express.Router()



// register admin
router.post("/adminRegister",registerAdmin)

// login admin
router.post('/adminLogin',loginAdmin)

// update admin
router.put('/adminUpdate',jwtMiddleware,updateAdmin)



module.exports = router