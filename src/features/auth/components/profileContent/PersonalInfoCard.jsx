import React, { useState, useEffect } from 'react';

const PersonalInfoCard = ({ user, onSave }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [phone, setPhone] = useState(user?.phone || '');
    const [address, setAddress] = useState(user?.address || '');

    useEffect(() => {
        setPhone(user?.phone || '');
        setAddress(user?.address || '');
    }, [user]);

    const handleSaveClick = () => {
        if (onSave) {
            onSave({ phone, address });
        }
        setIsEditing(false);
    };

    return (
        <div className="p-6 sm:p-8 space-y-6">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Personal Information</h3>
                
                {!isEditing ? (
                    <button
                        onClick={() => setIsEditing(true)}
                        className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium rounded-lg transition shadow-sm"
                    >
                        Edit Profile
                    </button>
                ) : (
                    <div className="space-x-2">
                        <button
                            onClick={() => setIsEditing(false)}
                            className="px-3 py-1.5 bg-gray-200 hover:bg-gray-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-gray-700 dark:text-zinc-300 text-xs font-medium rounded-lg transition"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSaveClick}
                            className="px-4 py-1.5 bg-green-600 hover:bg-green-700 text-white text-xs font-medium rounded-lg transition shadow-sm"
                        >
                            Save Changes
                        </button>
                    </div>
                )}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-zinc-800/50 p-4 rounded-lg border border-gray-100 dark:border-zinc-800">
                    <span className="block text-xs font-medium text-gray-400 dark:text-zinc-500 uppercase tracking-wider">Role</span>
                    <span className="mt-1 block text-sm font-semibold text-gray-800 dark:text-zinc-200 capitalize">{user?.role || 'User'}</span>
                </div>

                <div className="bg-gray-50 dark:bg-zinc-800/50 p-4 rounded-lg border border-gray-100 dark:border-zinc-800">
                    <span className="block text-xs font-medium text-gray-400 dark:text-zinc-500 uppercase tracking-wider">Phone Number</span>
                    {isEditing ? (
                        <input 
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="mt-1 w-full bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 rounded px-2 py-1 text-sm text-gray-800 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                            placeholder="Enter phone number"
                        />
                    ) : (
                        <span className="mt-1 block text-sm font-semibold text-gray-800 dark:text-zinc-200">{user?.phone || 'Not Set'}</span>
                    )}
                </div>

                <div className="bg-gray-50 dark:bg-zinc-800/50 p-4 rounded-lg border border-gray-100 dark:border-zinc-800 sm:col-span-2">
                    <span className="block text-xs font-medium text-gray-400 dark:text-zinc-500 uppercase tracking-wider">Address</span>
                    {isEditing ? (
                        <input 
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="mt-1 w-full bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 rounded px-2 py-1 text-sm text-gray-800 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                            placeholder="Enter address"
                        />
                    ) : (
                        <span className="mt-1 block text-sm font-semibold text-gray-800 dark:text-zinc-200">{user?.address || 'Not Set'}</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PersonalInfoCard;