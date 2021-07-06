import { Prompt } from 'react-router-dom';
import { useState } from 'react';

function Contact() {

    const [ischecked, setIsChecked] = useState(true)

    const onChangeChecked=(check)=>{
        setIsChecked(check)
    }

    return (
        <div>
            Đây là trang liên hệ
            <br />
            <button
                type="button"
                className="btn btn-info"
                onClick={()=>onChangeChecked(true)}
            >
                Cho Phép
            </button><br />
            <button
                type="button"
                className="btn btn-danger"
                onClick={()=>onChangeChecked(false)}
            >
                Không Cho Phép
            </button><br />
            <Prompt
                when={ischecked}
                message={location => (`Bạn chắc chắn muốn đi đến ${location.pathname}`)}
            />
        </div>
    );
}

export default Contact;
