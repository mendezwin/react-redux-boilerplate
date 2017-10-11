export default function (state = null, action) {

    switch (action.type) {

        case 'USER_ACTIVE':
            return action.payload;
            break;
            
    }

    return state;
}
