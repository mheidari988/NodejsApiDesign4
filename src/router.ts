import { Router } from 'express';

const router = Router();

// Products
router.get('/product', (req, res) => {
    res.json({
        message: `hello from products`
    });
});
router.get('/product/:id', () => { });
router.post('/product', () => { });
router.put('/product/:id', () => { });
router.delete('/product/:id', () => { });

// Updates
router.get('/update', () => { });
router.get('/update/:id', () => { });
router.post('/update', () => { });
router.put('/update/:id', () => { });
router.delete('/update/:id', () => { });

// Updates Points
router.get('/updatepoints', () => { });
router.get('/updatepoints/:id', () => { });
router.post('/updatepoints', () => { });
router.put('/updatepoints/:id', () => { });
router.delete('/updatepoints/:id', () => { });

export default router;