import React, { useEffect, useState } from 'react'

export default function AdminNavbar() {

    // localStorage.setItem('AdminLog', succ.data._id);

    const [ac, setac] = useState(window.innerWidth);
    const [view, setview] = useState(false);

    function chk() {
        if (ac < 768) {
            setview(true);
        }
    }

    useEffect(() => {
        chk();
    }, [])

    console.log(view);

    

    return (
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 p-0 leftlist">
            <button onClick={() => setview(true)} className='close'>x</button>
            <br />
            <div class="list-group list2" id="list-tab" >
                <a class="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Home</a>
                <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Profile</a>
                <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Messages</a>
                <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Settings</a>
            </div>
        </div>
    )
}
