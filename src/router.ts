import { Router } from "express";

const router = Router();

router.get('/api', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'Server online'
    });
});

export default router;