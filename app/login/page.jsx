

let loginUser =async(req, res)=>{
    let response = await fetch('http://localhost:5000/login', {method: "POST" },
      {
        username:req.body.email,
        password : req.body.password
      }
      
     );
    try {
      return response.json();
    } catch (error) {
      console.log(err)
    }
    }


export default async function Login(){
    loginUser()
return(
    <>
    <h3>Login Page</h3>
  
        <div>
            <label htmlFor="">username</label>
            <input type="text" />
        </div>

        <div>
            <label htmlFor="">Password</label>
            <input type="password" />
        </div>
        <div>
            <button onClick={loginUser} type="Login">Login</button>
        </div>
    
   
    </>
)
}