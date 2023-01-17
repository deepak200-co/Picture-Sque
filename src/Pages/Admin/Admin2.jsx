import "./admin.css"
import MainDash2 from "../MainDash/MainDash2";
import Sidebar from "./Sidebar"

export default function Admin(){
    return(
        <>
                <div className="adcir"></div>

        <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        <MainDash2/>
      </div>
    </div>
        </>
    )
}