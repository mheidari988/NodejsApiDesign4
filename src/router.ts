import { Router } from 'express';
import { validation } from './middlewares/validation-middleware';
import { productsHandler } from './handlers/products-handler';

const router = Router();


// Products
router.get('/product', productsHandler.getProducts);

router.get('/product/:id', productsHandler.getProductById);

router.post('/product', validation.postProduct, productsHandler.createProduct);

router.put('/product/:id', validation.putProduct, productsHandler.updateProduct);

router.delete('/product/:id', productsHandler.deleteProduct);

// Updates
router.get('/update', (req, res) => {
    res.status(500).json('Not Implemented');
});

router.get('/update/:id', (req, res) => {
    res.status(500).json('Not Implemented');
});

router.post('/update', validation.postUpdate, (req, res) => {
    res.status(500).json('Not Implemented');
});

router.put('/update/:id', validation.putUpdate, (req, res) => {
    res.status(500).json('Not Implemented');
});

router.delete('/update/:id', (req, res) => {
    res.status(500).json('Not Implemented');
});

// Updates Points
router.get('/updatepoint', (req, res) => {
    res.status(500).json('Not Implemented');
});

router.get('/updatepoint/:id', (req, res) => {
    res.status(500).json('Not Implemented');
});

router.post('/updatepoint', validation.postUpdatePoint, (req, res) => {
    res.status(500).json('Not Implemented');
});

router.put('/updatepoint/:id', validation.putUpdatePoint, (req, res) => {
    res.status(500).json('Not Implemented');
});

router.delete('/updatepoint/:id', (req, res) => {
    res.status(500).json('Not Implemented');
});

export default router;