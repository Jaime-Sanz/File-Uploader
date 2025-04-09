import { body, validationResult } from 'express-validator';

const validateSignup = [
    body('username')
        .trim()
        .notEmpty(),
    body('password')
        .trim()
        .notEmpty()
        .isLength( { min: 3} ),
    body('confirmpassword')
        .custom((value, { req }) => value === req.body.password)
        .withMessage('passwords do not match'),
    
    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            const error = new Error('Validation Error');
            error.status = 400;
            error.errors = errors.array();
            return next(error);
        }

        next();
    }
];

export default validateSignup;