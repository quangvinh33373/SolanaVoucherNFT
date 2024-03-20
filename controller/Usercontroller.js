const admin = require('firebase-admin');
const db = require('../api/api'); 
exports.listStaffs = async (req, res, next) => {
    let msg = '';
    let list = null;
    let listJson = [];
    
    

    try {
        list = await admin.firestore().collection('Users').get();


        list.docs.forEach(doc => {
            listJson.push(doc.data());
           
        });

        
        console.log(listJson);
        msg = 'Lấy dữ liệu thành công !';
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data from Firestore');
        
    }

    res.render('homeAdmin', {  listStaff: listJson, msg: msg});
}

exports.delete=async(req,res,next)=>{
    try {
        let id = req.params.id; // Lấy ID tài liệu từ URL
    
        // Xóa tài liệu dựa trên ID đã cung cấp
        await admin.firestore().collection('Staff').doc(id).delete();
    
        res.redirect('/staffs');
      } catch (error) {
        console.error('Error deleting data:', error);
        res.status(500).send('Error deleting data from Firestore');
      }
}

exports.put=async(req,res,next)=>{
   // Lấy ID tài liệu từ URL
        const newData = {
          
          Fullname: req.body.tenStaff,
          Email:req.body.emailStaff,
          Password: req.body.mkStaff,
        }; 
        
    try {
       // Dữ liệu mới từ request body
        console.log(newData);
        const docId = req.params.id; 
        // Cập nhật tài liệu dựa trên ID và dữ liệu mới đã cung cấp
        await admin.firestore().collection('Staff').doc(docId).set(newData,{ merge: true });
        res.redirect('/staffs');
    
        
      } catch (error) {
        console.error('Error updating data:', error);
        res.status(500).send('Error updating data in Firestore');
      }

   

      

  }