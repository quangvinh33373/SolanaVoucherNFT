

const admin = require('firebase-admin');
const db = require('../api/firebase-admin');
exports.login = async (req, res, next) => {
    res.render("login/login");

   
  };
  // day la 2 api rieng
  exports.LOGIN = (req, res, next) => {
    let datatocheck = { Email: req.body.Email, Password: req.body.Password };
    const collectionRef = admin.firestore().collection('Users').where('Email', '==', datatocheck.Email);
  
    try {
      console.log('email' + datatocheck.Email + 'pass:' + datatocheck.Password);
  
      if (datatocheck.Email === 'admin' && datatocheck.Password === 'admin') {
        res.json('ok');
      } else {
        collectionRef.get().then((snapshot) => {
          if (!snapshot.empty) {
            const userDoc = snapshot.docs[0];
            const userData = userDoc.data();
            // Kiểm tra mật khẩu
            if (userData.Password === datatocheck.Password) {
              console.log('Mật khẩu đúng' + userData.Password);
              res.json('ok');
            } else {
              const message = 'Mật khẩu không đúng';
              res.status(401).json({ error: message });
              res.json('fail');
            }
          } else {
            const message = 'Tài khoản không tồn tại';
            res.status(404).json({ error: message });
            console.log('Người dùng không tồn tại');
            res.json('notfound');
          }
        });
      }
    } catch (error) {
      res.status(500).json({ error: 'Đã xảy ra lỗi' });
    }
  };