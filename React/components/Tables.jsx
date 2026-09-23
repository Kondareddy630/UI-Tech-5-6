import Emp from "./Emp";
import Student from "./Student";


function Tables()
{


    return(

        <div className="container">
            <div className="row">

                <div className="col-lg-6">
                    <Emp></Emp>
                           
                </div>

                <div className="col-lg-6">
                    <Student></Student>
                </div>



            </div>
        </div>

    )
}

export default Tables;