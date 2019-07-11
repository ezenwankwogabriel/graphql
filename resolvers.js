
class Friend {
    constructor(id, {
        firstName,
        lastName,
        gender,
        languange
    }) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.languange = languange;
    }
}

const friendDb = {};

const resolvers = {
    getFriend: ({id}) => {
        return new Friend(id, friendDb[id]);
    },
    createFriend: ({input}) => {
        let id = require('crypto').randomBytes(10).toString('hex');
        friendDb[id] = id;
        return new Friend(id, input);
    }
};

export default resolvers
