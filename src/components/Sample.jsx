import React from 'react';

const SampleComponent = () => {
  return (
    <div className="p-4 bg-white dark:bg-slate-900 text-black dark:text-white h-[100vh]">
      <h1 className="text-xl">This is a sample component</h1>
      <p className="mt-2">It inherits the global theme styles.</p>
    </div>
  );
};

export default SampleComponent;
