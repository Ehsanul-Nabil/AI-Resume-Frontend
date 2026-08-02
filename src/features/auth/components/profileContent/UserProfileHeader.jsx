import React from 'react';

const UserProfileHeader = ({ user }) => {
    return (
        <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 border-b border-gray-200 dark:border-zinc-800">
            {user?.avatar ? (
                <img 
                    src={user.avatar} 
                    alt={user.username} 
                    className="w-20 h-20 rounded-full object-cover border-2 border-gray-200 dark:border-zinc-700"
                />
            ) : (
                <div className="w-20 h-20 rounded-full bg-indigo-100 dark:bg-zinc-800 text-indigo-700 dark:text-zinc-200 flex items-center justify-center text-2xl font-bold border-2 border-gray-200 dark:border-zinc-700">
                    {user?.username ? user.username.charAt(0).toUpperCase() : 'U'}
                </div>
            )}

            <div className="flex-1 text-center sm:text-left">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white capitalize">
                    {user?.username}
                </h2>
                <p className="text-sm text-gray-500 dark:text-zinc-400">{user?.email}</p>
                <div className="mt-2">
                    <span className={`inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full ${
                        user?.isGoogle 
                            ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300' 
                            : 'bg-gray-100 text-gray-700 dark:bg-zinc-800 dark:text-zinc-300'
                    }`}>
                        {user?.isGoogle ? 'Google Connected Account' : 'Manual Account'}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default UserProfileHeader;