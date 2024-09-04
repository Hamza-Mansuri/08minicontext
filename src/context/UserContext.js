//isme pure and pure javascript hoti he.

import React from "react";

//IMP createContext() method

const UserContext = React.createContext()

export default UserContext

//usercontext ek PROVIDER act krta he
//it is like Global Variable.

//andr ke saare components saare state ka access le sakte he.

{/* <UserContext>
<Login />
<Card>
    <Data />
</Card>
<UserContext/> */}

//isko hum ese wrap kr dege.