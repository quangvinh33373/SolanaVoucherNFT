
const admin = require('firebase-admin');
const db = require('../api/firebase-admin');


exports.qlyKH = async (req, res, next) => {
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

  res.render('qlyKH/qlyKH', {  listStaff: listJson, msg: msg});
}

exports.qlykhMobile = async (req, res, next) => {
  const data = [];
  
  

  try {
    const snapshot = await db.collection('Users').get();
    const data = [];

    snapshot.forEach(doc => {
      data.push({
        id: doc.id,
        ...doc.data()
      });
    });

    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data from Firestore');
  }

}





exports.delete=async(req,res,next)=>{
  try {
    const Id=req.params.id;
    const collectionRef = db.collection('Users');

    collectionRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const docData = doc.data();
    
        // Kiểm tra và cập nhật các item
        if (docData.id === Id) {
          console.log('Tìm thấy item cần xoa ');
          doc.ref.delete();
         
      res.redirect('/qlyKH');
        }
      });
    });

  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data from Firestore');
  }
}

exports.put = async (req, res, next) => {
  try {
    // Lấy ID tài liệu từ URL
    const collectionRef = admin.firestore().collection('Users');
    const Id = collectionRef.doc().id;

    const docID = Id ? collectionRef.doc(Id) : collectionRef.doc();
    const newData = {
      id: Id,
      Avatar: req.body.Avatar,
      SDT: req.body.SDT,
      Fullname: req.body.Fullname,
      Email: req.body.Email,
      Password: req.body.Password,
    };

    // log ra newData trước để kiểm tra
    console.log(newData);

    // Ghi dữ liệu mới vào Firestore
    await docID.set(newData);

    // Chuyển hướng người dùng đến '/qlyKH' sau khi ghi dữ liệu thành công
    res.redirect('/qlyKH');
  } catch (error) {
    console.error('Error updating data:', error);
    res.status(500).send('Error updating data in Firestore');
  }
};



exports.update=async(req,res,next)=>{
  try {
    const Id=req.params.id;
    const newData = {
      id : Id,
      Avatar: req.body.Avatar,
      SDT: req.body.SDT,
      
      Fullname: req.body.Fullname,
      Email:req.body.Email,
      Password: req.body.Password,
    }; 
    console.log(newData) 
    const collectionRef = db.collection('Users');

    collectionRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const docData = doc.data();
    
        // Kiểm tra và cập nhật các item
        if (docData.id === Id) {
          console.log('Tìm thấy item cần sửa');
          doc.ref.update(newData);
         
      res.redirect('/qlyKH');
        }
      });
    });

  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data from Firestore');
  }
  
 }