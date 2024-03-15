import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [Location]);
    return <>{props.children}</>;

};
export default ScollToTop;