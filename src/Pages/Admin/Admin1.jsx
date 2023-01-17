import "./admin.css"
import MainDash1 from "../MainDash/MainDash1";
import Sidebar from "./Sidebar"
import App from "../../App";

export default function Admin(){
    return(
        <>
                <div className="adcir"></div>

        <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        <MainDash1/>
      </div>
    </div>
        </>
    )
}