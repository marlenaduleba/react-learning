import { useState, useEffect } from "react";

export const Users = () => {
  
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const data = await fetch("https://reqres.in/api/users/")
        .then(res => res.json())
        .then(result => {
                setIsLoaded(true);
                setUsers(result.data);
            
        },
        error => {
          setIsLoaded(true);
          setError(error);
        })
    }


    useEffect(() => {
        getUsers();
    }, []);

        
    

    
if (error) {
    return <div>Błąd: {error.message}</div>;
} else if (!isLoaded) {
    return <div>Ładownie...</div>;
}

else {
    return users.map(user => (
        <div key={user.id}>
            <p><strong>{user.first_name}</strong></p>
            <p>{user.email}</p>
            <img key={user.avatar} src={user.avatar} alt="avatar" />
        </div>
    ))
}
    
}