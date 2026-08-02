


import React from 'react';
import UserProfileHeader from './profilecontent/UserProfileHeader';
import PersonalInfoCard from './profilecontent/PersonalInfoCard';

const ProfileContent = ({ user, onSave }) => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-6">
                
                {/* Page Title Header */}
                <div className="flex justify-between items-center border-b border-gray-200 dark:border-zinc-800 pb-5">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Profile</h1>
                        <p className="text-sm text-gray-500 dark:text-zinc-400">Manage your account settings and preferences.</p>
                    </div>
                </div>

                {/* Main Profile Card Grid/Section */}
                <div className="bg-white dark:bg-zinc-900 shadow-sm rounded-xl border border-gray-200 dark:border-zinc-800 overflow-hidden">
                    <UserProfileHeader user={user} />
                    <PersonalInfoCard user={user} onSave={onSave} />
                </div>
            </div>
        </div>
    );
};

export default ProfileContent;