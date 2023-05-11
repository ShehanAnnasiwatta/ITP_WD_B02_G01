import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { CustomerUpdate, FetchCustomerObj } from '../redux/actions/Customer';
import Header_bar from "../components/Header_bar/Header_bar";
import "../pages/Content.css"

function UpdateCustomer() {
    const [_id, set_id] = useState(0);
    const [cusId, setcusId] = useState();
    const [cusName, setcusNam] = useState("");
    const [email, setemail] = useState("");
    const [address, setaddress] = useState("");
    const [dob, setdob] = useState("");
    const [conInfo, setconInfo] = useState("");
    const [user, setuser] = useState("");
    const [password, setpassword] = useState("");
  
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { code } = useParams();
  
    const customerobj = useSelector((state) => state.customer.customerobj);
  
    useEffect(() => {
      dispatch(FetchCustomerObj(code));
    }, []);
  
    useEffect(() => {
      if (customerobj) {
        set_id(customerobj._id);
        setcusId(customerobj.cusId);
        setcusNam(customerobj.cusName);
        setemail(customerobj.email);
        setaddress(customerobj.address);
        setdob(customerobj.dob);
        setconInfo(customerobj.conInfo);
        setuser(customerobj.user);
        setpassword(customerobj.password);
      }
    }, [customerobj]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const customerobj = { _id, cusId, cusName, email, address, dob, conInfo, user, password };
      dispatch(CustomerUpdate(_id, customerobj));
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
          <span>Search bar</span>
        </div>
        <div class="page_sub_header">
        <t class="sub_header_topic">Update Customer</t>
        </div>
        <div className="ContentForm ">
        <form onSubmit={handleSubmit}>
          <div>
            <div>
                  <div>
                    <label class="form">Obj Id :</label>
                    <input
                      className="form-control"
                      value={_id || ""}
                      disabled="disabled"
                    />
                  </div>
                  <div className="form-group">
                    <label class="form">Customer Id :</label>
                    <input
                      className="form-control"
                      value={cusId || ""}
                      disabled="disabled"
                    />
                  </div>
                  <div className="form-group">
                    <label class="form">Customer Name :</label>
                    <input
                      className="form-control"
                      value={cusName || ""}
                      onChange={(e) => setcusNam(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label class="form">Customer Email :</label>
                    <input
                      className="form-control"
                      value={email || ""}
                      onChange={(e) => setemail(e.target.value)}
                    />
                  </div>
             
                  <div className="form-group">
                    <label class="form">Customer Address :</label>
                    <input
                      className="form-control"
                      value={address || ""}
                      onChange={(e) => setaddress(e.target.value)}
                    />
                  </div>
           
                  <div className="form-group">
                    <label class="form">Date of Birth :</label>
                    <input
                      type="date"
                      className="form-control"
                      value={dob || ""}
                      onChange={(e) => setdob(e.target.value)}
                    />
                  </div>
              
              
                  <div className="form-group">
                    <label class="form">Mobile Number :</label>
                    <input
                      className="form-control"
                      value={conInfo || ""}
                      onChange={(e) => setconInfo(e.target.value)}
                    />
                  </div>
              
              
                  <div className="form-group">
                    <label class="form">User Name :</label>
                    <input
                      className="form-control"
                      value={user || ""}
                      onChange={(e) => setuser(e.target.value)}
                    />
                  </div>
            </div>
            <div>
              <button type="submit" className="submit">Update</button>
              <Link to={"/viewCustomer"} className="clear">Back</Link>
            </div>
          </div>
        </form>
        </div>
      </div>
    );
}

export default UpdateCustomer