import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import {Button} from "react-bootstrap";

function StartBT() {
    const [buttonVisible, setButtonVisible] = useState(true);

    const handleButtonClick = () => {
        setButtonVisible(false);
    };

    return (
        <div>
            {buttonVisible && (
                <Button
                    onClick={handleButtonClick}
                    variant='outline-success'
                  >Let's play</Button>
            )}
        </div>
    );
}

export default StartBT;
