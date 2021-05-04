import React from 'react';

const FullHeaderContainer = ({title, descr}) => {
    return (
        <div class="offset-borders">
            <div class="full-header-container" id="header-menus">
                <div class="full-header">
                    <div class="container">
                        <h1>{title}</h1>
                        <h3>{descr}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullHeaderContainer;
