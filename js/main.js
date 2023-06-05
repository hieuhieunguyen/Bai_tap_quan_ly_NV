var dsnv = [];

var dataJson = localStorage.getItem('DSNV');
if(dataJson != null) {
    dsnv = JSON.parse(dataJson).map(function(nv) {
        return new nhanVien(nv.taiKhoan, nv.ten, nv.email, nv.matKhau, nv.ngayLam, nv.luong, nv.chucVu, nv.gioLam);
    });
    renderHTML(dsnv);
}; 

// biến kiểm tra validate

function themNhanVien() {
    var nv = layThongTinTuForm();
    var checked = kiemTraForm(nv);

    if(checked) {
        dsnv.push(nv);
        renderHTML(dsnv);
    
        var dataJson = JSON.stringify(dsnv);
        localStorage.setItem('DSNV', dataJson);
    };
};

function xoaNhanVien(id) {
    var index = dsnv.findIndex(function(nv) {
        return nv.taiKhoan == id;
    });

    dsnv.splice(index, 1);
    renderHTML(dsnv);

    var dataJson = JSON.stringify(dsnv);
    localStorage.setItem('DSNV', dataJson);
};

function capNhatNV() {
    var taiKhoan = document.getElementById('tknv').value;
    var index = dsnv.findIndex(function(nv) {
        return nv.taiKhoan == taiKhoan;
    });
    var nvCapNhat = dsnv[index];

    var nv = layThongTinTuForm();
    var checked = kiemTraForm(nv);

    if(checked) {
        nvCapNhat.taiKhoan = document.getElementById('tknv').value;
        nvCapNhat.ten = document.getElementById('name').value;
        nvCapNhat.email = document.getElementById('email').value;
        nvCapNhat.matKhau = document.getElementById('password').value;
        nvCapNhat.ngayLam = document.getElementById('datepicker').value;
        nvCapNhat.luong = document.getElementById('luongCB').value;
        nvCapNhat.chucVu = document.getElementById('chucvu').value;
        nvCapNhat.gioLam = document.getElementById('gioLam').value;
    };

    renderHTML(dsnv);
    var dataJson = JSON.stringify(dsnv);
    localStorage.setItem('DSNV', dataJson);
};

function timNhanVien(dsnv) {
    var timLoaiNhanVien = document.getElementById('searchName').value;
    var dsLoaiNhanVien = [];

    for(var i = 0; i < dsnv.length; i++) {
        if(timLoaiNhanVien == dsnv[i].xepLoai()) {
            dsLoaiNhanVien.push(dsnv[i]);
        };
    };

    if(dsLoaiNhanVien.length == 0) {
        alert('Không có loại nhân viên này !');
    } else {
        renderHTML(dsLoaiNhanVien);
    };
};
