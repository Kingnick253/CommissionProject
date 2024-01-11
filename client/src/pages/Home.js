import React from 'react';

const Home = () => {

  

  return (
    <div className="container mx-auto flex justify-center items-center h-screen bg-slate-200">
  <div className="bg-slate-200 p-8 flex flex-col items-center rounded-lg">
    {/* Your content goes here */}
    <button className='shadow-lg bg-slate-400 font-bold rounded-md px-6 py-3 text-white hover:bg-blue-400'>
      Click Me
    </button>
  </div>
</div>
  );
};

export default Home;