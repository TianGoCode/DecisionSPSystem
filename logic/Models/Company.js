class Company {
    _id;
    trongSo;
    tieuChi;
    doanhNghiep;
    diaChi;

    constructor(doanhNghiep) {
        this.doanhNghiep = doanhNghiep
    }

    chuanHoaCot(listCandidate) {
        let tmp = [...listCandidate];
        let result = {}
        let wdiaChi = 0;
        let wkinhNghiem = 0;
        let wtrinhDoHocVan = 0;
        let wtrinhdoNgoaiNgu = 0;
        let as1 = 0;
        let as2 = 0;
        let as3 = 0;
        let as4 = 0;
        let am1 = 999;
        let am2 = 999;
        let am3 = 999;
        let am4 = 999;
        for (let item of tmp) {
            wdiaChi += (Number(item.diaChi) ** 2);
            wkinhNghiem += (Number(item.kinhNghiem) ** 2);
            wtrinhDoHocVan += (Number(item.trinhDoHocVan) ** 2);
            wtrinhdoNgoaiNgu += (Number(item.trinhDoNgoaiNgu) ** 2);
        }
        wdiaChi = Math.sqrt(wdiaChi);
        wkinhNghiem = Math.sqrt(wkinhNghiem);
        wtrinhDoHocVan = Math.sqrt(wtrinhDoHocVan);
        wtrinhdoNgoaiNgu = Math.sqrt(wtrinhdoNgoaiNgu);
        for (let item of tmp) {
            item.diaChi = (Number(item.diaChi) / wdiaChi).toFixed(2) * 0.2;
            if (item.diaChi >= as1) {
                as1 = item.diaChi;
            }
            if (item.diaChi <= am1) {
                am1 = item.diaChi
            }

            item.kinhNghiem = (Number(item.kinhNghiem) / wkinhNghiem).toFixed(2) * 0.3;
            if (item.kinhNghiem >= as2) {
                as2 = item.kinhNghiem;
            }
            if (item.kinhNghiem <= am2) {
                am2 = item.kinhNghiem
            }

            item.trinhDoHocVan = (Number(item.trinhDoHocVan) / wtrinhDoHocVan).toFixed(2) * 0.3;
            if (item.trinhDoHocVan >= as3) {
                as3 = item.trinhDoHocVan;
            }
            if (item.trinhDoHocVan <= am3) {
                am3 = item.trinhDoHocVan
            }

            item.trinhDoNgoaiNgu = (Number(item.trinhDoNgoaiNgu) / wtrinhdoNgoaiNgu).toFixed(2) * 0.2;
            if (item.trinhDoNgoaiNgu >= as4) {
                as4 = item.trinhDoNgoaiNgu;
            }
            if (item.trinhDoNgoaiNgu <= am4) {
                am4 = item.trinhDoNgoaiNgu
            }
            // chuan hoa xong


        }

        //tinh A*  va a- xong
        result.AS = [as1, as2, as3, as4];
        result.AM = [am1, am2, am3, am4];

        // tinh s* s-
        let SS = [];
        let SM = [];
        SS = tmp.map((item, index) => {
            let v1 = (Number(item.diaChi) - as1) ** 2;
            let v2 = (Number(item.kinhNghiem) - as2) ** 2;
            let v3 = (Number(item.trinhDoHocVan) - as3) ** 2;
            let v4 = (Number(item.trinhDoNgoaiNgu) - as4) ** 2;
            return Math.sqrt(v1 + v2 + v3 + v4)
        })
        SM = tmp.map((item) => {
            let v1 = (Number(item.diaChi) - am1) ** 2;
            let v2 = (Number(item.kinhNghiem) - am2) ** 2;
            let v3 = (Number(item.trinhDoHocVan) - am3) ** 2;
            let v4 = (Number(item.trinhDoNgoaiNgu) - am4) ** 2;
            return Math.sqrt(v1 + v2 + v3 + v4)
        })

        result.SS = SS;
        result.SM = SM;

        result.bestSS = tmp[SS.indexOf(Math.min(...SS))]._id
        result.bestSM = tmp[SM.indexOf(Math.max(...SM))]._id
        result.CS = SS.map((item, index) => {
            return SM[index] / (SS[index] + SM[index])
        })

        result.bestCS = tmp[result.CS.indexOf(Math.max(...result.CS))]._id
        console.log(result);
    }

}

module.exports = Company