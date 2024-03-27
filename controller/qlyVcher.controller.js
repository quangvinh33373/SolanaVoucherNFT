
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



exports.qlyVoucherMobile = async (req, res, next) => {
  const data = [];
  
  

  try {
    const snapshot = await db.collection('Voucher').get();
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


exports.buyVoucher = async (req, res, next) => {
  try {
    const voucherId = req.params.id;
    const userName = req.body.userName;
const diachiVi=req.body.diachiVi;
    // Kiểm tra xem phiếu giảm giá có tồn tại không
    const voucherDoc = await admin.firestore().collection('Voucher').doc(voucherId).get();
    if (!voucherDoc.exists) {
      return res.status(404).json({ error: `Phiếu giảm giá với ID ${voucherId} không tồn tại` });
    }
    
    // Kiểm tra trạng thái của phiếu giảm giá
    const voucherData = voucherDoc.data();
    if (voucherData.trangThai !== 'đang bán') {
      return res.status(403).json({ error: `Phiếu giảm giá với ID ${voucherId} không thể mua được` });
    }

    await admin.firestore().collection('Voucher').doc(voucherId).update({ diachiVi: diachiVi });
    await admin.firestore().collection('Voucher').doc(voucherId).update({ userName: userName });
    // Cập nhật trạng thái của phiếu giảm giá thành "đã mua"
    await admin.firestore().collection('Voucher').doc(voucherId).update({ trangThai: 'đã mua' });

    res.status(200).json({ message: `Phiếu giảm giá với ID ${voucherId} đã được mua thành công bởi người dùng ${userName}` });
  } catch (error) {
    console.error('Lỗi khi mua phiếu giảm giá:', error);
    res.status(500).send('Lỗi khi mua phiếu giảm giá');
  }
};



exports.sellVoucher = async (req, res, next) => {
  try {
    const voucherId = req.params.id;
    const userName = req.body.userName;
   


    // Kiểm tra xem phiếu giảm giá có tồn tại không
    const voucherDoc = await admin.firestore().collection('Voucher').doc(voucherId).get();
    if (!voucherDoc.exists) {
      return res.status(404).json({ error: `Phiếu giảm giá với ID ${voucherId} không tồn tại` });
    }

    // Kiểm tra trạng thái của phiếu giảm giá
    const voucherData = voucherDoc.data();
    if (voucherData.trangThai !== 'đã mua') {
      return res.status(403).json({ error: `Phiếu giảm giá với ID ${voucherId} không thể bán được` });
    }

    await admin.firestore().collection('Voucher').doc(voucherId).update({ userName: userName });
    // Cập nhật trạng thái của phiếu giảm giá thành "đang bán"
    await admin.firestore().collection('Voucher').doc(voucherId).update({ trangThai: 'đang bán' });

    res.status(200).json({ message: `Phiếu giảm giá với ID ${voucherId} đã được bán thành công bởi người dùng ${userName}` });
  } catch (error) {
    console.error('Lỗi khi bán phiếu giảm giá:', error);
    res.status(500).send('Lỗi khi bán phiếu giảm giá');
  }
};





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

exports.put = async (req, res, next) => {
  try {
    // Lấy ID tài liệu từ URL
    const collectionRef = admin.firestore().collection('Voucher');
    const Id = collectionRef.doc().id;

    const docID = Id ? collectionRef.doc(Id) : collectionRef.doc();
    const newData = {
      id: Id,
      imgVoucher: req.body.imgVoucher,
      maVoucher: req.body.maVoucher,
      hanSd: req.body.hanSd,
      hanmuc: req.body.hanmuc,
      Loai: req.body.Loai,
      diachiVi: req.body.diachiVi,
      trangThai: req.body.trangThai,
      userName: req.body.userName
    };

    // log ra newData trước để kiểm tra
    console.log(newData);

    // Ghi dữ liệu mới vào Firestore
    await docID.set(newData);

    // Redirect sau khi ghi dữ liệu thành công
    res.redirect('/qlyVcher');
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
        imgVoucher: req.body.imgVoucher,
        maVoucher: req.body.maVoucher,
        
        hanSd: req.body.hanSd,
        hanmuc:req.body.hanmuc,
        Loai: req.body.Loai,
        diachiVi: req.body.diachiVi,
        trangThai: req.body.trangThai,
        userName: req.body.userName
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