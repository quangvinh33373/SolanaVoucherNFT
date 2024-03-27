// Lắng nghe sự kiện submit form tìm kiếm
// Lắng nghe sự kiện submit form tìm kiếm
document.getElementById('sForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form
 
    // Lấy giá trị nhập vào từ input tìm kiếm
    const searchQuery = document.getElementById('searchInput').value;
  console.log(searchQuery)
    // Tạo truy vấn tìm kiếm trong Firestore
    const db = firebase.firestore();
    const vouchersRef = db.collection('Voucher');

    // Sử dụng where() để lọc theo trường 'Loai' và 'maVoucher'
    const query = vouchersRef.where('Loai', '==', searchQuery).get()
        .then(querySnapshot => {
            // Khởi tạo mảng kết quả
            const results = [];
            querySnapshot.forEach(doc => {
                // Thêm dữ liệu từ các tài liệu tìm thấy vào mảng kết quả
                results.push(doc.data());
            });
            // Xóa trước khi hiển thị kết quả
            clearPreviousResults();
            // Xử lý kết quả
            displaySearchResults(results);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

// Xóa kết quả tìm kiếm trước đó
function clearPreviousResults() {
    const searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = '';
}

// Hiển thị kết quả tìm kiếm lên trang web
function displaySearchResults(results) {
    const searchResultsContainer = document.getElementById('searchResults');

    if (results.length === 0) {
        searchResultsContainer.innerHTML = '<p>No vouchers found</p>';
    } else {
        const resultList = document.createElement('ul');
        results.forEach(voucher => {
            const listItem = document.createElement('li');
            listItem.textContent = voucher.maVoucher; // Hiển thị mã voucher, bạn có thể tùy chỉnh hiển thị theo nhu cầu
            resultList.appendChild(listItem);
        });
        searchResultsContainer.appendChild(resultList);
    }
}
