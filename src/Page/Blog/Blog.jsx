import React from 'react';

const Blog = () => {
    return (
        <div>
            <ul>
                <li className='text-4xl mb-4'> 1 : In React, controlled components refer to components that have their state and behavior controlled by the parent component.</li>
                
                <li className='text-4xl mb-4'>2 : We can use React props, short for properties, to send data from one component to another. If a component receives the wrong type of props, it can cause bugs and unexpected errors in your app.</li>
                <li className='text-4xl mb-4'>3 : NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</li>
                
                <li className='text-4xl'>4 : it can be reused easily, which makes the code cleaner and reduces the time to write the code</li>
            </ul>
        </div>
    );
};

export default Blog;