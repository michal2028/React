
function Header() {

    const users = [
        {
            name: 'John',
            age: 15
        },
        {
            name: 'Jack',
            age: 20
        },
        {
            name: 'Caroline',
            age:35
        }
    ]
    
    return (
        <div>
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
            <ul>
            {users.map((el,index) =>{
                return (
                  <li key={index}>
                    <p>Name: {el.name}, age: {el.age}</p>
                  </li>  
                )
            })}
            </ul>
        </div>
    )

}

export default Header;