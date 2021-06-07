const {
    ObjectId
} = require('bson');
const DB = require('../Models/database');
const Candidate = require("../Models/Candidate");
const Company = require("../Models/Company");

const candidateController = {};

candidateController.create = async (data) => {
    try {
        let newCandidate = new Candidate(data.hoVaTen, data.diaChi, data.ngaySinh, data.mail, data.sdt, data.kinhNghiem, data.trinhDoHocVan, data.trinhDoNgoaiNgu, data.viTriUngTuyen);
        console.log(newCandidate);
        const insertedNUT = await DB.nut.insertOne(newCandidate)
        newCandidate._id = insertedNUT.insertedId;
        console.log(newCandidate)
    } catch (error) {
        console.log(error);
        throw error;
    }
}

candidateController.getBy10 = async (offset, index) => {
    try {
        const Offset = Number(offset);
        const Index = Number(index);
        const list = await DB.nut.find().sort({
            thoiGian: -1
        }).skip(Offset * (Index - 1)).limit(Offset).toArray();
        return list;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

candidateController.read = async (id) => {
    try {
        const foundCandidate = await DB.nut.findOne({
            _id: ObjectId(id)
        })
        let tmp = new Candidate("", '', '', '', '', '', '', '', '');
        tmp.getDataFromDb(foundCandidate);
        return tmp;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

candidateController.update = async (id, data) => {
    try {
        const foundCandidate = await DB.nut.updateOne({
            _id: ObjectId(id)
        }, {
            $set: data

        })
    } catch (error) {
        console.log(error)
        throw error;
    }
}

candidateController.delete = async (id) => {
    try {
        const foundCandidate = await DB.nut.deleteOne({
            _id: ObjectId(id)
        })
    } catch (error) {
        console.log(error)
        throw error;
    }
}

candidateController.normalize1 = async () => {
    try {
        let data = await DB.nut.find().toArray();

        let tmpCompany = new Company("xxx");
        let companyData = await DB.admin.findOne({
            _id: ObjectId("60bcde37d3c22d7ccba6dcd8")
        })
        tmpCompany.getDataFromDb(companyData);
        let result = tmpCompany.chuanHoaCot(data);
        const solution = {}
        solution.bestSS = await DB.nut.findOne({
            _id: ObjectId(result.bestSS)
        });
        solution.bestSM = await DB.nut.findOne({
            _id: ObjectId(result.bestSM)
        });
        solution.bestCS = await DB.nut.findOne({
            _id: ObjectId(result.bestCS)
        });
        return solution;
    } catch (error) {
        console.log(error)
        throw error
    }
}

candidateController.addWeight = async () => {
    try {
        const weight = await DB.admin.findOne({
            _id: ObjectId("60bcde37d3c22d7ccba6dcd8")
        });
        return weight.trongSo
    } catch (error) {
        console.log(error)
        throw error
    }
}

candidateController.updateWeight = async (data) => {
    try {
        const weight = await DB.admin.updateOne({
            _id: ObjectId("60bcde37d3c22d7ccba6dcd8")
        }, {
            $set: {
                trongSo:data
            }
        });

    } catch (error) {
        console.log(error)
        throw error
    }
}


module.exports = candidateController;