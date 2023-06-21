import React from 'react';
import ClientAppTable from './ClientAppTable';
import Profiles from './Profiles';

function Account() {
  return (
    <div className="border-x-4 border-blue-500 max-w-screen-xl mx-auto mt-6 px-4">
    <Profiles/>
    <ClientAppTable/>
    </div>
  );
}

export default Account;
