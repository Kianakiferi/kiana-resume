export type Profile = {
    name: String;
    info: String;
    phoneNumber: String;
    email: String;
    jobIntent: {
        title: String;
        target: String;
    };
    expectSalary: {
        title: String;
        target: String;
    };
};
