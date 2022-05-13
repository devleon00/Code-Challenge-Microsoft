const StudentController = require("./../../lib/controller/StudentsController");

describe("Test de clase 'StudentController'", () => {
    test("1) Probando metodo 'studentFullFields()'", () => {
        const expected = {
            id: "6264d5d89f1df827eb84bb23",
            name: "Warren",
            email: "Todd@visualpartnership.xyz",
            credits: 508,
            enrollments: [
                "Visual Thinking Intermedio",
                "Visual Thinking Avanzado",
            ],
            previousCourses: 1,
            haveCertification: true,
        };

        const expectClass = StudentController.studentFullFields();
        expect(expectClass[0]).toEqual(expected);
    });

    test("2) Probando metodo 'studentCertificationField()'", () => {
        const expected = {
            id: "6264d5d89f1df827eb84bb23",
            name: "Warren",
            email: "Todd@visualpartnership.xyz",
            credits: 508,
            enrollments: [
                "Visual Thinking Intermedio",
                "Visual Thinking Avanzado",
            ],
            previousCourses: 1,
            haveCertification: true,
        };

        const expectClass = StudentController.studentCertificationField();
        expect(expectClass[0]).toMatch(expected.email);
    });

    test("3) Probando metodo 'studentCredits()'", () => {
        const expected = {
            id: "6264d5d89f1df827eb84bb23",
            name: "Warren",
            email: "Todd@visualpartnership.xyz",
            credits: 508,
            enrollments: [
                "Visual Thinking Intermedio",
                "Visual Thinking Avanzado",
            ],
            previousCourses: 1,
            haveCertification: true,
        };

        const expectClass = StudentController.studentCredits();
        expect(expectClass[0]).toEqual(expected);
    });
});
