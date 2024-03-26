


const VoucherSchema =({
    maVoucher:{type:Types.ObjectId},  // const LoaiPhong = mongoose.model("loaiPhong");
    tenVoucher:{type: String},
    date: {type: date},
    hinhAnh: {type: String},
   
});
module.exports = mongoose.model('Voucher', VoucherSchema);