class Candidate{
    _id;
    thoiGian;
    hoVaTen;
    diaChi;
    ngaySinh;
    mail;
    sdt;
    kinhNghiem;
    trinhDoHocVan;
    trinhDoNgoaiNgu
    viTriUngTuyen;

    constructor(hoVaTen,diaChi,ngaySinh,mail,sdt,kinhNghiem,trinhDoHocVan,trinhDoNgoaiNgu,viTriUngTuyen){
        this.thoiGian = new Date();
        this.hoVaTen = hoVaTen;
        this.diaChi=diaChi;
        this.ngaySinh = new Date(ngaySinh);
        this.mail = mail;
        this.kinhNghiem = kinhNghiem;
        this.sdt = sdt;
        this.trinhDoHocVan = trinhDoHocVan;
        this.trinhDoNgoaiNgu = trinhDoNgoaiNgu;
        this.viTriUngTuyen = viTriUngTuyen
    }
    getDataFromDb(data){
        for (var attr in data) {
            if (this.hasOwnProperty(attr)) this[attr] = data[attr];
        }
    }
}

module.exports = Candidate