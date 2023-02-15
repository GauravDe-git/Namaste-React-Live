import { createContext } from "react";


const UserContext = createContext({
    user: {
        name: "create context name",
        email: "create@context.com",
    },
});

export default UserContext;