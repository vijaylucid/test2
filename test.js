// Import necessary dependencies
import React from 'react';
import { withRouter } from 'react-router-dom';

// Define the functional component
function Test() {
    return (
        <div>
            <h1>Hello from the Test Component is important</h1>
        </div>
    );
}

// Export the component wrapped with withRouter for route access
export default withRouter(Test);
