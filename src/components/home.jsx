import { Link } from "react-router-dom";

const Home=()=>{    
    return(
        <div>
            <h1>this is home page</h1>
            
            <Link to ={"/movies"}>Movies</Link>
            
        </div>
    )
}
export default Home;