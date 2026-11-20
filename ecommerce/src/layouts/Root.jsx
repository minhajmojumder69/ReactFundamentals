import { Outlet } from "react-router";

const Root = () => {
    return (
        <div>
            <p>This is a navber</p>
            <Outlet/>
        </div>
    );
};

export default Root;