import React, { createContext } from 'react';

const UserContext = createContext();

const UserState = (props) => {

    const [num, setNum] = React.useState(0)


    return (
        <UserContext.Provider value={{ num, setNum }}>
            {props.children}
        </UserContext.Provider>
    )
}
export { UserContext };
export default UserState
