import BottomRightComponent from "./BottomRightComponent";
import TopRightComponent from "./TopRightComponent";

export default function RightComponent() {
    return (
        <>
            <div className="flex-1">
                <TopRightComponent />
            </div>
            <div className="flex-1">
                <BottomRightComponent />
            </div>
        </>
    )
};
