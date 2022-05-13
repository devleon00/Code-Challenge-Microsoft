const Reader = require("./../utils/Reader");
const StudentServices = require("./../services/StudentServices");

class StudentController {
    static studentFullFields() {
        const data = Reader.readJsonFile("data/visualpartners.json");
        return StudentServices.studentFullFields(data);
    }

    static studentCertificationField() {
        const data = Reader.readJsonFile("data/visualpartners.json");
        return StudentServices.studentCertificationField(data);
    }

    static studentCredits() {
        const data = Reader.readJsonFile("data/visualpartners.json");
        return StudentServices.studentCredits(data);
    }
}

module.exports = StudentController;
