function nhanVien(taiKhoan, ten, email, matKhau, ngayLam, luong, chucVu, gioLam) {
    this.taiKhoan = taiKhoan;
    this.ten = ten;
    this.email = email;
    this.matKhau = matKhau;
    this.ngayLam = ngayLam;
    this.luong = luong;
    this.chucVu = chucVu;
    this.gioLam = gioLam;
    this.tongLuong = function() {
        if(this.chucVu == 'Sếp') {
            return this.luong * 3;
        } else if(this.chucVu == 'Trưởng phòng') {
            return this.luong * 2;
        } else {
            return this.luong;
        };
    };
    this.xepLoai = function() {
        if(this.gioLam >= 192) {
            return 'Xuất sắc';
        } else if(this.gioLam >= 176) {
            return 'Giỏi';
        } else if(this.gioLam >= 160) {
            return 'Khá';
        } else {
            return 'Trung bình';
        };
    };
};