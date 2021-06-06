class Company {
    _id;
    trongSo;
    tieuChi;
    doanhNghiep;
    diaChi;

    chuanHoaCot(listCandidate) {
        let tmp = [...listCandidate];

        for (let item of tmp) {
            item.diaChi = (Number(item.diaChi) / Math.sqrt(30)).toFixed(2);
            item.kinhNghiem = (Number(item.kinhNghiem) / Math.sqrt(5)).toFixed(2);
            item.trinhDoHocVan = (Number(item.trinhDoHocVan) / Math.sqrt(55)).toFixed(2);
            item.trinhDoNgoaiNgu = (Number(item.trinhDoNgoaiNgu) / Math.sqrt(5)).toFixed(2);
        }
        console.log(item)
    }
}