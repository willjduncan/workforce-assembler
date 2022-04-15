import express from 'express';
import deptRoutes from './deptRoutes.js';
import roleRoutes from './roleRoutes.js';
import empRoutes from './employeeRoutes.js';
const router = express.Router();

router.use(deptRoutes);
router.use(roleRoutes);
router.use(empRoutes);

export default router;