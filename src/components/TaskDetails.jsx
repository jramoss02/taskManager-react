import React from 'react';
import { CgLaptop } from 'react-icons/cg';
import { useParams } from 'react-router-dom';

import Button from './Button';

const TaskDetails = () => {

    const params = useParams();
    console.log(params);

    return ( 
        <>
            <div className="back-button-container">
                <Button>Voltar</Button>
            </div>
            <div className="task-details-container">
                <p></p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo explicabo excepturi commodi, ipsum voluptatum ratione?
                </p>
            </div>
        </>
     );
}
 
export default TaskDetails;