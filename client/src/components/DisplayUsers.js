import React from "react";
import {useQuery} from "@apollo/client";
import { QUERY_ALL_USERS } from "../Queries/GraphqlQueuries";
const DisplayUsers = () => {
    const {data, loading, error} = useQuery(QUERY_ALL_USERS);
    if(loading){
        return <h1> Data is loading...</h1>
    }
    if(error) console.log(error);
    // if(data) console.log(data);
    return ( 
        <div>
            <h1>List of Users : </h1>
            {
            data.users && data.users.map((user) => {
            return(
            <div key={user.id}>
                <h1>Name : {user.name}</h1>
                <h1>UserName : {user.username}</h1>
                <h1>Age : {user.age}</h1>
                <h1>Nationality : {user.nationality}</h1>
                <hr />
            </div>)})
            }
        </div>
    );
}
 
export default DisplayUsers;