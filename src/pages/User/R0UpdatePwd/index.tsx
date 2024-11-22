import {useNavigate} from "react-router-dom";

function Index() {
   const navigate =  useNavigate()
    function onClick(){
        navigate('/login')
    }
    return (
        <div>
            MobileChangeBind
            <button onClick={onClick}>login</button>
        </div>
    );
}

export default Index;