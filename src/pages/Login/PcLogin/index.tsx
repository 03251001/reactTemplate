import {Modal} from "antd";
import {useAppDispatch, useAppSelector} from "@store/Index";
import {updateLoginModal} from "@slice/GlobalSlice";
import PhoneForm from "@pages/Login/components/PhoneForm";
import Footer, {LoginMethod} from "@pages/Login/components/Footer";
import {useState} from "react";
import SteamForm from "@pages/Login/components/SteamForm";
import ScanForm from "@pages/Login/components/ScanForm";
import {initialState} from "@slice/GlobalSlice/interface.ts";


function Index() {
    const dispatch = useAppDispatch();

    const {
        loginModalVisible
    } = useAppSelector(state => state.GlobalSlice || initialState)

    const [type, setType] = useState<LoginMethod>('phone')

    function handleCancel() {
        dispatch(updateLoginModal(false))
    }

    return (
        <Modal
            centered
            title="登录"
            open={loginModalVisible}
            onCancel={handleCancel}
            footer={null}
            destroyOnClose={true}
        >
            {type === "phone" && <PhoneForm/>}
            {type === "steam" && <SteamForm link={false}/>}
            {type === "scan" && <ScanForm/>}

            <Footer
                method={type}
                steamHandler={() => setType('steam')}
                scanHandler={() => setType('scan')}
                phoneHandler={() => setType('phone')}
            />
        </Modal>
    );
}

export default Index;