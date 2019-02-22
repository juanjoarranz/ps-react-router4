import React from 'react';

const PropViewer = ( { match, location } ) => {

    return (
        <div>
            <h1> Props Viewer </h1>

            <h2> props.match.path: {match.path} </h2>
            <h2> props.location.key: {location.key} </h2>
        </div>

    );

};

export default PropViewer;