
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

exports.delete=async(req,res,next)=>{
  try {
      let id = req.params.id; // Lấy ID tài liệu từ URL
  
      // Xóa tài liệu dựa trên ID đã cung cấp
      await admin.firestore().collection('Users').doc(id).delete();
  
      res.redirect('/qlyKH');
    } catch (error) {
      console.error('Error deleting data:', error);
      res.status(500).send('Error deleting data from Firestore');
    }
}

exports.put=async(req,res,next)=>{
 // Lấy ID tài liệu từ URL
 // cai req.body chua trung ten cua cai input 
 // sau body la name 
 const collectionRef = admin.firestore().collection('Users');
 const Id = collectionRef.doc().id;

 const docID = Id ? collectionRef.doc(Id) : collectionRef.doc();
      const newData = {
        id : Id,
        Avatar: req.body.Avatar,
        SDT: req.body.SDT,
        
        Fullname: req.body.Fullname,
        Email:req.body.Email,
        Password: req.body.Password,
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

      // Cập nhật tài liệu dựa trên ID và dữ liệu mới đã cung cấp
 
      res.redirect('/qlyKH');
  
      
    } catch (error) {
      console.error('Error updating data:', error);
      res.status(500).send('Error updating data in Firestore');
    }
}
exports.update=async(req,res,next)=>{
  try {
    const newData = {
      id : Id,
      Avatar: req.body.Avatar,
      SDT: req.body.SDT,
      
      Fullname: req.body.Fullname,
      Email:req.body.Email,
      Password: req.body.Password,
    };
    console.log(newData) 
    const collectionRef = db.collection('Address');

    collectionRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const docData = doc.data();

        // Kiểm tra và xóa đối tượng map
        for (const key in docData) {
          const fieldValue = docData[key];
          if (typeof fieldValue === 'object' && fieldValue !== null && fieldValue.idAdress=== Id) {
          docData[key]=newData ;
            break;
          }
        }

        // Cập nhật lại tài liệu
        doc.ref.set(docData)
            .then(() => {
              console.log('Đối tượng map đã được cap nhat thành công');
              res.send("cap nhat thanh cong")
            })
            .catch((error) => {
              console.error('Lỗi khi cập nhật tài liệu:', error);
            });
      });
    }).catch((error) => {
      console.error('Lỗi khi truy xuất tài liệu:', error);
    });

  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data from Firestore');
  }
  
 }