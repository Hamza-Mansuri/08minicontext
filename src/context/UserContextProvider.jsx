import React, { useState } from "react";

import UserContext from "./UserContext";

//jese layout me header footer same rakhte the, wese yaha bhi jo bhi props aa rahe he as it is use krlo.(children:- just a generic name.)

const UserContextProvider = ({children}) => {

    const [user, setUser] = useState(null)
    //user me kuch value add krni ho to uske liye setUser
    //aur agr koi value chahiye he to sirf user se data lelu, bcz user value return kr rha he.

    return(
        //IMP method.
        //kuch value to pass krni hogi na, usko hi props bolte he, jisme kisi ka bhi access de sakte he.
        <UserContext.Provider value={{user, setUser}}>
        {/* jo aa raha he as it is display krdo */}
        {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider