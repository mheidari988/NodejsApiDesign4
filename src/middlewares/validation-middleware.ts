import { body, oneOf, validationResult } from "express-validator";


const badrequest = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400);
        res.json({
            errors: errors.array()
        });
    }
    else {
        next();
    }
}

const postProduct = [
    body('name').isString(),
    badrequest
];

const putProduct = [
    body('name').isString(),
    badrequest
];

const postUpdate = [
    body('title').exists().isString(),
    body('body').exists().isString(),
    body('productId').exists().isUUID(),
    badrequest
]

const putUpdate = [
    body('title').optional(),
    body('body').optional(),
    body('status').optional().isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRICATED']),
    body('version').optional(),
    body('asset').optional(),
    badrequest
]

const postUpdatePoint = [
    body('name').exists().isString(),
    body('description').exists().isString(),
    body('updatedId').exists().isUUID(),
    badrequest
]

const putUpdatePoint = [
    body('name').optional().isString(),
    body('description').optional().isString(),
    body('updatedId').optional().isUUID(),
    badrequest
]

export const validation = {
    postProduct, putProduct,
    postUpdate, putUpdate,
    postUpdatePoint, putUpdatePoint
}