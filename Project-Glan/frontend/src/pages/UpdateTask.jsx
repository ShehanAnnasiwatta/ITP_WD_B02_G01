import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FetchTaskObj, TaskUpdate } from "../redux/actions/TaskAction";
import Header_bar_manu from "../components/Header_bar/Header_bar_manu";
import "../pages/Content.css"

const UpdateTask = () => {
  const [_id, set_id] = useState(0);
  const [tId, setId] = useState();
  const [iName, setIname] = useState("");
  const [iQty, setIqty] = useState("");
  const [prodSupe, setProdSupe] = useState("");
  const [sDate, setSDate] = useState("");
  const [eDate, setEDate] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { code } = useParams();

  const taskobj = useSelector((state) => state.task.taskobj);

  useEffect(() => {
    dispatch(FetchTaskObj(code));
  }, []);

  useEffect(() => {
    if (taskobj) {
      set_id(taskobj._id);
      setId(taskobj.tId);
      setIname(taskobj.iName);
      setIqty(taskobj.iQty);
      setProdSupe(taskobj.prodSupe);
      setSDate(taskobj.sDate);
      setEDate(taskobj.eDate);
    }
  }, [taskobj]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskobj = { _id, tId, iName, iQty, prodSupe, sDate, eDate };
    dispatch(TaskUpdate(_id, taskobj));
    navigate("/task");
  };

  return (
    <div>
      <div>  <Header_bar_manu 
                fun1="Dashboard"
                fun2="Task"
                fun7="Report"/>
        </div>
        <div className="search">
        </div>
        <div class="page_sub_header">
        <t class="sub_header_topic">Update Task</t>
        </div>
        <div className="ContentForm ">
        <form onSubmit={handleSubmit}>
        <div >
          <div>
                <div>
                  <label  >Obj Id :</label>
                  <input
                    className="form-control"
                    value={_id || ""}
                    disabled="disabled"
                  />
                </div>
                <div>
                  <label class="form">Task Id :</label>
                  <input
                    className="form-control"
                    value={tId || ""}
                    disabled="disabled"
                  />
                </div>

                <div>
                  <label class="form">Output Item Name :</label>
                  <input
                    className="form-control"
                    value={iName || ""}
                    onChange={(e) => setIname(e.target.value)}
                  />
                </div>
              
            
                <div>
                  <label class="form">Output Item Quantity :</label>
                  <input
                    className="form-control"
                    value={iQty || ""}
                    onChange={(e) => setIqty(e.target.value)}
                  />
                </div>
              
            
                <div>
                  <label class="form">Production Supervisor :</label>
                  <input
                    className="form-control"
                    value={prodSupe || ""}
                    onChange={(e) => setProdSupe(e.target.value)}
                  />
                </div>
             
           
                <div>
                  <label class="form">Start Date :</label>
                  <input
                    className="form-control"
                    value={sDate || ""}
                    onChange={(e) => setSDate(e.target.value)}
                  />
                </div>
             
           
                <div >
                  <label class="form">End Date :</label>
                  <input
                    className="form-control"
                    value={eDate || ""}
                    onChange={(e) => setEDate(e.target.value)}
                  />
                </div>
              </div>
            <div>
              <button type="submit" className="submit">Update</button>
              <Link to={"/task"} className="clear">Back</Link>
            </div>
        </div>
      </form>
      </div>
    </div>
  );
};

export default UpdateTask;
