const StudentServices = require("./../../lib/services/StudentServices");

describe("Test de clase 'StudentServices'", () => {
    test("1) Probando metodo 'studentFullFields()'", () => {
        const students = [
            {
                id: "6264d5d89f1df827eb84bb23",
                name: "Warren",
                email: "Todd@visualpartnership.xyz",
                credits: 501,
                enrollments: [
                    "Visual Thinking Intermedio",
                    "Visual Thinking Avanzado",
                ],
                previousCourses: 1,
                haveCertification: true,
            },
        ];
        const expectClass = StudentServices.studentFullFields(students);
        expect(expectClass).toEqual(students);
    });

    test("2) Probando metodo 'studentCertificationField()'", () => {
        const students = [
            {
                id: "6264d5d89f1df827eb84bb23",
                name: "Warren",
                email: "Todd@visualpartnership.xyz",
                credits: 501,
                enrollments: [
                    "Visual Thinking Intermedio",
                    "Visual Thinking Avanzado",
                ],
                previousCourses: 1,
                haveCertification: true,
            },
        ];
        const expectClass = StudentServices.studentCertificationField(students);
        expect(expectClass[0]).toEqual(students[0].email);
    });

    test("3) Probando metodo 'studentCredits()'", () => {
        const students = [
            {
                id: "6264d5d89f1df827eb84bb23",
                name: "Warren",
                email: "Todd@visualpartnership.xyz",
                credits: 501,
                enrollments: [
                    "Visual Thinking Intermedio",
                    "Visual Thinking Avanzado",
                ],
                previousCourses: 1,
                haveCertification: true,
            },
        ];
        const expectClass = StudentServices.studentCredits(students);
        expect(expectClass).toEqual(students);
    });
});

