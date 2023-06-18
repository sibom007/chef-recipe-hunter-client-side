import React from 'react';

const Feedback = () => {
    return (
        <div>
            <h1 className='text-center text-4xl font-bold'>Give us Feedback of our website</h1>
           <div className='text-center'>
           <input  type="text" placeholder="Give feed back" className="input input-bordered input-accent w-full max-w-xs mt-4"  />
           <br />
            <button className="btn btn-outline btn-error mt-3 mb-5">submit</button>
           </div>

        </div>
    );
};

export default Feedback;