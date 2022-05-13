class studentServices {
    static studentFullFields(students) {
        return students;
    }

    static studentCertificationField(students) {
        return students
            .filter((student) => {
                return student.haveCertification === true;
            })
            .map((student) => {
                return student.email;
            });
    }

    static studentCredits(students) {
        return students.filter((student) => {
            return student.credits > 500;
        });
    }
}

module.exports = studentServices;
