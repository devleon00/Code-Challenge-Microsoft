const Reader = require("./../../lib/utils/Reader");

describe("Test de clase 'Reader'", () => {
    test("1) Probando metodo 'readJsonFile()'", () => {
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

        const expectClass = Reader.readJsonFile("data/visualpartners.json");
        expect(expectClass[0]).toEqual(expected);
    });
});
