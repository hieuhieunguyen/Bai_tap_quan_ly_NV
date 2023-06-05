function showMessage(idSpan, message) {
    document.getElementById(idSpan).innerText = message;
};

function kiemTraKySo(value) {
    const reg = new RegExp('^[0-9]+$');
    if(reg.test(value)) {
        showMessage('tbTKNV', '');
        return true;
    } else {
        showMessage('tbTKNV', 'Tài khoản tối đa 4-6 ký số !');
        return false;
    };
};

function kiemTraDoDai(min, max, value) {
    var length = value.length;
    if(length >= min && length <= max) {
        showMessage('tbTKNV', '');
        return true;
    } else {
        showMessage('tbTKNV', 'Tài khoản tối đa 4-6 ký số !')
        return false;
    }
};

function kiemTraTen(value) {
    var re = /^([^0-9]*)$/;
    if(re.test(value)) {
        showMessage('tbTen', '');
        return true;
    } else {
        showMessage('tbTen', 'Tên nhân viên phải là chữ !');
        return false;
    };
};

function kiemTraEmail(value) {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(re.test(value)) {
        showMessage('tbEmail', '');
        return true;
    } else {
        showMessage('tbEmail', 'Email phải đúng định dạng !');
        return false;
    };
};

function kiemTraMatKhau(value) {
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,10}$/;
    if(re.test(value)) {
        showMessage('tbMatKhau', '');
        return true;
    } else {
        showMessage('tbMatKhau', 'Mật khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt) !');
        return false;
    };
};

function noEmpty(idSpan, message, value) {
    if(value.length == 0) {
        showMessage(idSpan, message);
        return false;
    } else {
        showMessage(idSpan, '');
        return true;
    };
};

function kiemTraNgay(value) {
    var re = /^\d{2}\/\d{2}\/\d{4}$/;
    if(re.test(value)) {
        showMessage('tbNgay', '');
        return true;
    } else {
        showMessage('tbNgay', 'Định dạng mm/dd/yyyy');
        return false;
    };
};

function kiemTraLuong(value) {
    if(value >= 1000000 && value <= 20000000) {
        showMessage('tbLuongCB', '');
        return true;
    } else {
        showMessage('tbLuongCB', 'Lương cơ bản 1 000 000 - 20 000 000');
        return false;
    };
};

function kiemTraChucVu(value) {
    if(value == 'Chọn chức vụ') {
        showMessage('tbChucVu', 'Chức vụ phải chọn chức vụ hợp lệ !');
        return false;
    } else {
        showMessage('tbChucVu', '');
        return true;
    };
};

function kiemTraGioLam(value) {
    if(value >= 80 && value <=200) {
        showMessage('tbGiolam', '');
        return true;
    } else {
        showMessage('tbGiolam', 'Số giờ làm trong tháng 80 - 200 giờ');
        return false;
    };
};