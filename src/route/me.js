const express = require('express');
const router = express.Router();
const me = require('../app/controller/meController.js');
//Quy chuẩn dùng Method
// GET : Dùng để lấy dữ liệu
// POST : Dùng để lưu dữ liệu,ng dùng
// PUT : Dùng để chỉnh sửa ,update ,restore dữ liệu
// DELETE : Dùng để xoá dữ liệu




//Bin Category
router.get('/Category/bin',me.binCategory);
router.put('/Category/bin/restoreCategory/:id',me.restoreCategory);
router.delete('/Category/bin/deleteOutBinCategory/:id',me.deleteOutBinCategory);
router.post('/Category/bin/optionServiceBin',me.optionServiceBin);
//page Category
router.get('/Category',me.Category);
router.get('/Category/edit/:id',me.editCategory);
router.put('/updateCategory',me.updateCategory) // doi sang method put
router.post('/storeCategory',me.storeCategory)
router.delete('/removeCategory/:id',me.removeCategory)
router.delete('/removeManyCategory',me.removeManyCategory)

//Item Category
router.get('/getItemCategory/:id',me.getItemCategory)
router.get('/ItemCategory',me.ItemCategory);
router.get('/ItemCategory/edit/:id',me.editItemCategory);
router.put('/updateItemCategory',me.updateItemCategory) 
router.post('/storeItemCategory',me.storeItemCategory);
router.delete('/removeItemCategory/:id',me.removeItemCategory);
router.delete('/removeManyItemCategory/',me.removeManyItemCategory);

//Bin Item Category
router.get('/:slugCategory/binItemCategory',me.binItemCategory);
router.put('/:slugCategory/bin/restoreItemCategory/:id',me.restoreItemCategory);
router.delete('/:slugCategory/bin/deleteOutBinItemCategory/:id',me.deleteOutBinItemCategory);
router.post('/:slugCategory/bin/optionServiceBinItemCategory',me.optionServiceBinItemCategory);

//Product
router.get('/Product',me.Product);
router.post('/storeProduct',me.storeProduct);


//admin
router.get('/dashboard',me.dashboard);


module.exports = router; 