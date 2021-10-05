import React, { useEffect, useState } from 'react';

import EachService from '../EachService/EachService';
import './Unique.css'
const Unique = () => {
    const [uniques, setUniques] = useState([])
    useEffect(() => {
        fetch('./homedriving.JSON')
            .then(res => res.json())
            .then(data => setUniques(data))

    }, [])
    return (
        <div>
            <h1 className="unique-header">Our Services:</h1>
            <div>

                <div class="row row-cols-1 row-cols-md-4 g-4">
                    {
                        uniques.map(unique => <EachService unique={unique}></EachService>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Unique;