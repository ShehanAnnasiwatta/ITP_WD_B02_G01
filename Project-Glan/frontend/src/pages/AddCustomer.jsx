import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CreateCustomer } from "../redux/actions/Customer";
import Header_bar from "../components/Header_bar/Header_bar";
import "../pages/Content.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function AddCustomer() {

    const [cusId, setcusId] = useState("");
    const [cusName, setcusName] = useState("");
    const [email, setemail] = useState("");
    const [address, setaddress] = useState("");
    const [dob, setdob] = useState("");
    const [conInfo, setconInfo] = useState("");
    const [user, setuser] = useState("");
    const [password, setpassword] = useState("");
  
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const customerobj = { cusId, cusName, email,address, dob, conInfo,user,password };
      dispatch(CreateCustomer(customerobj));
      navigate("/viewCustomer");
    };
  
    return (
      <div>
         <div>  <Header_bar 
          fun1="Dashboard"
          fun2="Customer"
          fun3="Customer Privilege"
          fun4="Customer Feedback"
          fun5="Purchase History"
          fun6="Notifications"
          fun7="Report"/>
        </div>
        <div className="search">
        </div>
        <div class="page_sub_header">
        <t class="sub_header_topic">Create Customer</t>
        </div>
        <div className="ContentForm ">
        <form onSubmit={handleSubmit}>
          <div>
            <div>
                  <div>
                    <label class="form">Customer Id :</label>
                    <input
                      className="form-control"
                      value={cusId}
                      onChange={(e) => setcusId(e.target.value)}
                    />
                  </div>
                  <div >
                    <label class="form">Customer Name :</label>
                    <input
                      className="form-control"
                      value={cusName}
                      onChange={(e) => setcusName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label  class="form">Customer Email:</label>
                    <input
                      className="form-control"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label  class="form">Customer Address :</label>
                    <input
                      className="form-control"
                      value={address}
                      onChange={(e) => setaddress(e.target.value)}
                    />
                  </div>
                  <div>
                    <label  class="form">Date of birth :</label>
                    <input
                      type="d"
                      className="form-control"
                      value={dob}
                      onChange={(e) => setdob(e.target.value)}
                    />
                  </div>
                  <div>
                    <label  class="form">Mobile Number:</label>
                    <input
                      className="form-control"
                      value={conInfo}
                      onChange={(e) => setconInfo(e.target.value)}
                    />
                  </div>
                  <div>
                    <label  class="form">User Name :</label>
                    <input
                      className="form-control"
                      value={user}
                      onChange={(e) => setuser(e.target.value)}
                    />
                  </div>
                  <div>
                    <label  class="form">User Password :</label>
                    <input
                      className="form-control"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                    />
                  </div>
            </div>
            <div>
              <button type="submit" className="submit">Submit</button>
              <Link to={"/viewCustomer"} className="clear">Back</Link>
            </div>
          </div>
        </form>
        </div>
      </div>
    );
}

export default AddCustomer