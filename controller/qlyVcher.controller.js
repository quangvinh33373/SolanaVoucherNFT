
const admin = require('firebase-admin');
const db = require('../api/firebase-admin');


exports.qlyVoucher = async (req, res, next) => {
  let msg = '';
  let list = null;
  let listJson = [];
  
  

  try {
      list = await admin.firestore().collection('Voucher').get();


      list.docs.forEach(doc => {
          listJson.push(doc.data());
         
      });

      
      console.log(listJson);
      msg = 'Lấy dữ liệu thành công !';
  } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).send('Error fetching data from Firestore');
      
  }

  res.render('qlyVoucher/qlyVoucher', {  listStaff: listJson, msg: msg});
}

exports.delete=async(req,res,next)=>{
  try {
    const Id=req.params.id;
    const collectionRef = db.collection('Voucher');

    collectionRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const docData = doc.data();
    
        // Kiểm tra và cập nhật các item
        if (docData.id === Id) {
          console.log('Tìm thấy item cần xoa ');
          doc.ref.delete();
         
      res.redirect('/qlyVcher');
        }
      });
    });

  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data from Firestore');
  }
}

exports.put=async(req,res,next)=>{
 // Lấy ID tài liệu từ URL
 // cai req.body chua trung ten cua cai input 
 // sau body la name 
 const collectionRef = admin.firestore().collection('Voucher');
 const Id = collectionRef.doc().id;

 const docID = Id ? collectionRef.doc(Id) : collectionRef.doc();
      const newData = {
        id : Id,
        imgVoucher: req.body.imgVoucher,
        maVoucher: req.body.maVoucher,
        
        hanSd: req.body.hanSd,
        hanmuc:req.body.hanmuc,
        Loai: req.body.Loai,
      }; 
      
      docID.set(newData).then(() => {
        res.status(200).send(`Document with ID: add successfully`);
        return collectionRef.doc().id;
    })
       //log ra newData truoc de check o day
        console.log(newData)
  try {
     // Dữ liệu mới từ request body
      console.log(newData);

      
      res.redirect('/qlyVcher');

       
    } catch (error) {
      console.error('Error updating data:', error);
      res.status(500).send('Error updating data in Firestore');
    }
}
exports.update=async(req,res,next)=>{
  try {
    const Id=req.params.id;
    const newData = {
      
      id : Id,
        imgVoucher: req.body.imgVoucher,
        maVoucher: req.body.maVoucher,
        
        hanSd: req.body.hanSd,
        hanmuc:req.body.hanmuc,
        Loai: req.body.Loai,
    }; 
    console.log(newData) 
    const collectionRef = db.collection('Voucher');

    collectionRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const docData = doc.data();
    
        // Kiểm tra và cập nhật các item
        if (docData.id === Id) {
          console.log('Tìm thấy item cần sửa');
          doc.ref.update(newData);
         
      res.redirect('/qlyVcher');
        }
      });
    });

  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data from Firestore');
  }
  
 }