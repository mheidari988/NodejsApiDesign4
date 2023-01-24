import { Router } from 'express';
import { validation } from './middlewares/validation-middleware';
import { productsHandler } from './handlers/products-handler';
import { updatesHandler } from './handlers/updates-handler';

const router = Router();


// Products
router.get('/product', productsHandler.getProducts);

router.get('/product/:id', productsHandler.getProductById);

router.post('/product', validation.postProduct, productsHandler.createProduct);

router.put('/product/:id', validation.putProduct, productsHandler.updateProduct);

router.delete('/product/:id', productsHandler.deleteProduct);

// Updates
router.get('/update', updatesHandler.getUpdates);

router.get('/update/:id', updatesHandler.getUpdateById);

router.post('/update', validation.postUpdate, updatesHandler.createUpdate);

router.put('/update/:id', validation.putUpdate, updatesHandler.updateUpdate);

router.delete('/update/:id', updatesHandler.deleteUpdate);

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