const {check,validationResult}=require('express-validator')

exports.registerRules=()=>[
    check('email','this field is required').notEmpty(),
    check('email','this field should be a valid email').isEmail(),
    check('password','this field should have 6 char at least').isLength({min:6})
]
exports.AddProductsRules=()=>[
    check('names','this field is required').notEmpty(),
    check('descriptions','this field is required').notEmpty(),
    check('images','this field is required').notEmpty(),
    check('prices','this field is required').notEmpty(),
    check('siteofficiel','this field is required').notEmpty(),
    check('categories','this field is required').notEmpty(),
    check('desponiblitys','this field is required').notEmpty(),
    check('linkproducts','this field is required').notEmpty(),
    check('logoofficiel','this field is required').notEmpty()
]


exports.validator=(req,res,next)=>{
    const errors=validationResult(req)
    errors.isEmpty()?next():res.status(400).json({errors:errors.array()})
}


