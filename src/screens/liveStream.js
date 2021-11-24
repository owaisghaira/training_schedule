import React, { useEffect } from 'react'
import { Slider, Modal, Image, Row, Col } from 'antd';

const LiveStream = () => {
    useEffect(() => {
        let open = setInterval(() => {
            countDown()
        }, 5000);
        // clearInterval(open)
    }, [])
    function countDown() {
        const modal = Modal.success({
            title: 'This is a notification message',
            content: `This modal will be destroyed after  second.`,
        });

    }

    return (
        <>
            <div style={{objectFit:'cover'}}>
                    <img style={{ height:'550px',width:'700px' }}  alt='pic' 
                        src="https://www.unic.ac.cy/tdunit/wp-content/uploads/sites/25/2019/07/training-programs.jpg"
                    />
            </div>
            <div style={{ position: 'fixed', bottom: '20px', width: '97%', textAlign: 'center' }}>
                <Slider defaultValue={30} />
            </div>
        </>
    )
}

export default LiveStream
