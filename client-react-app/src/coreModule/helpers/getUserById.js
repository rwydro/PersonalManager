
export const getUserById = (users, userId) => {
    return users.find(el => el.userIdentifier === userId).displayName
};