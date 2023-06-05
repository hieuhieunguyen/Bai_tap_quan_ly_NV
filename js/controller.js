function renderHTML(dsnv) {
    var contentHTML = '';
    for(var i = 0; i < dsnv.length; i++) {
        var nv = dsnv[i];
        var content = `<tr>
            <td>${nv.taiKhoan}</td>
            <td>${nv.ten}</td>
            <td>${nv.email}</td>
            <td>${nv.ngayLam}</td>
            <td>${nv.chucVu}</td>
            <td>${nv.tongLuong()}</td>
            <td>${nv.xepLoai()}</td>
            <td><button onclick="xoaNhanVien('${nv.taiKhoan}')" class="btn btn-danger">xóa</button></td>
        </tr>`;
        contentHTML += content;
    };
    document.getElementById('tableDanhSach').innerHTML = contentHTML;
};

function layThongTinTuForm() {
    var taiKhoan = document.getElementById('tknv').value;
    var ten = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var matKhau = document.getElementById('password').value;
    var ngayLam = document.getElementById('datepicker').value;
    var luong = document.getElementById('luongCB').value;
    var chucVu = document.getElementById('chucvu').value;
    var gioLam = document.getElementById('gioLam').value;

    return new nhanVien(taiKhoan, ten, email, matKhau, ngayLam, luong, chucVu, gioLam);
};


function kiemTraForm(nv) {
    // check tài khoản
    var isvalid = noEmpty('tbTKNV', 'Tài khoản không được để trống !', nv.taiKhoan) && kiemTraKySo(nv.taiKhoan) && kiemTraDoDai(4, 6, nv.taiKhoan);
    // kiểm tra tên
    isvalid &= noEmpty('tbTen', 'Tên không được để trống !', nv.ten) && kiemTraTen(nv.ten);
    // kiểm tra email
    isvalid &= noEmpty('tbEmail', 'Email không được để trống !', nv.email) && kiemTraEmail(nv.email);
    // kiểm tra mật khẩu
    isvalid &= noEmpty('tbMatKhau', 'Mật khẩu không được để trống !', nv.matKhau) && kiemTraMatKhau(nv.matKhau);
    // kiểm tra ngày
    isvalid &= noEmpty('tbNgay', 'Ngày làm không được để trống !', nv.ngayLam) && kiemTraNgay(nv.ngayLam);
    // kiểm tra lương
    isvalid &= noEmpty('tbLuongCB', 'Lương không được để trống !', nv.luong) && kiemTraLuong(nv.luong);
    // kiểm tra chức vụ
    isvalid &= kiemTraChucVu(nv.chucVu);
    // kiểm tra số giờ làm
    isvalid &= noEmpty('tbGiolam', 'Giờ làm không được để trống !', nv.gioLam)  && kiemTraGioLam(nv.gioLam);
    
    return isvalid;
};