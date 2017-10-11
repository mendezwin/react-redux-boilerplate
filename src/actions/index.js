export const selectUser = (user) => {
    console.log("You clicked User: ", user.name);
    return {
        type: 'USER_ACTIVE',
        payload: user
    }
};
