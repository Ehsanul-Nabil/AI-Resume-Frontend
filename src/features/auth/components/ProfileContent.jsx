
// import React, { useState, useEffect } from 'react';

// const ProfileContent = ({ user, onSave }) => {
//     const [isEditing, setIsEditing] = useState(false);
//     const [phone, setPhone] = useState(user?.phone || '');
//     const [address, setAddress] = useState(user?.address || '');

//     // Keep local state synced if user prop changes
//     useEffect(() => {
//         setPhone(user?.phone || '');
//         setAddress(user?.address || '');
//     }, [user]);

//     const handleSaveClick = () => {
//         // Pass the updated fields up to parent/handler
//         if (onSave) {
//             onSave({ phone, address });
//         }
//         setIsEditing(false);
//     };

//     return (
//         <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 py-10 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-4xl mx-auto space-y-6">
                
//                 {/* Page Title Header */}
//                 <div className="flex justify-between items-center border-b border-gray-200 dark:border-zinc-800 pb-5">
//                     <div>
//                         <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Profile</h1>
//                         <p className="text-sm text-gray-500 dark:text-zinc-400">Manage your account settings and preferences.</p>
//                     </div>
//                 </div>

//                 {/* Main Profile Card Grid/Section */}
//                 <div className="bg-white dark:bg-zinc-900 shadow-sm rounded-xl border border-gray-200 dark:border-zinc-800 overflow-hidden">
                    
//                     {/* Top User Summary Banner Inside Card */}
//                     <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 border-b border-gray-200 dark:border-zinc-800">
//                         {user?.avatar ? (
//                             <img 
//                                 src={user.avatar} 
//                                 alt={user.username} 
//                                 className="w-20 h-20 rounded-full object-cover border-2 border-gray-200 dark:border-zinc-700"
//                             />
//                         ) : (
//                             <div className="w-20 h-20 rounded-full bg-indigo-100 dark:bg-zinc-800 text-indigo-700 dark:text-zinc-200 flex items-center justify-center text-2xl font-bold border-2 border-gray-200 dark:border-zinc-700">
//                                 {user?.username ? user.username.charAt(0).toUpperCase() : 'U'}
//                             </div>
//                         )}

//                         <div className="flex-1 text-center sm:text-left">
//                             <h2 className="text-xl font-bold text-gray-900 dark:text-white capitalize">
//                                 {user?.username}
//                             </h2>
//                             <p className="text-sm text-gray-500 dark:text-zinc-400">{user?.email}</p>
//                             <div className="mt-2">
//                                 <span className={`inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full ${
//                                     user?.isGoogle 
//                                         ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300' 
//                                         : 'bg-gray-100 text-gray-700 dark:bg-zinc-800 dark:text-zinc-300'
//                                 }`}>
//                                     {user?.isGoogle ? 'Google Connected Account' : 'Manual Account'}
//                                 </span>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Detailed Information Section */}
//                     <div className="p-6 sm:p-8 space-y-6">
//                         <div className="flex justify-between items-center">
//                             <h3 className="text-lg font-medium text-gray-900 dark:text-white">Personal Information</h3>
                            
//                             {/* In-section Edit / Save Button */}
//                             {!isEditing ? (
//                                 <button
//                                     onClick={() => setIsEditing(true)}
//                                     className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium rounded-lg transition shadow-sm"
//                                 >
//                                     Edit Profile
//                                 </button>
//                             ) : (
//                                 <div className="space-x-2">
//                                     <button
//                                         onClick={() => setIsEditing(false)}
//                                         className="px-3 py-1.5 bg-gray-200 hover:bg-gray-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-gray-700 dark:text-zinc-300 text-xs font-medium rounded-lg transition"
//                                     >
//                                         Cancel
//                                     </button>
//                                     <button
//                                         onClick={handleSaveClick}
//                                         className="px-4 py-1.5 bg-green-600 hover:bg-green-700 text-white text-xs font-medium rounded-lg transition shadow-sm"
//                                     >
//                                         Save Changes
//                                     </button>
//                                 </div>
//                             )}
//                         </div>
                        
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                             <div className="bg-gray-50 dark:bg-zinc-800/50 p-4 rounded-lg border border-gray-100 dark:border-zinc-800">
//                                 <span className="block text-xs font-medium text-gray-400 dark:text-zinc-500 uppercase tracking-wider">Role</span>
//                                 <span className="mt-1 block text-sm font-semibold text-gray-800 dark:text-zinc-200 capitalize">{user?.role || 'User'}</span>
//                             </div>

//                             {/* Phone Number Field / Input */}
//                             <div className="bg-gray-50 dark:bg-zinc-800/50 p-4 rounded-lg border border-gray-100 dark:border-zinc-800">
//                                 <span className="block text-xs font-medium text-gray-400 dark:text-zinc-500 uppercase tracking-wider">Phone Number</span>
//                                 {isEditing ? (
//                                     <input 
//                                         type="text"
//                                         value={phone}
//                                         onChange={(e) => setPhone(e.target.value)}
//                                         className="mt-1 w-full bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 rounded px-2 py-1 text-sm text-gray-800 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-indigo-500"
//                                         placeholder="Enter phone number"
//                                     />
//                                 ) : (
//                                     <span className="mt-1 block text-sm font-semibold text-gray-800 dark:text-zinc-200">{user?.phone || 'Not Set'}</span>
//                                 )}
//                             </div>

//                             {/* Address Field / Input */}
//                             <div className="bg-gray-50 dark:bg-zinc-800/50 p-4 rounded-lg border border-gray-100 dark:border-zinc-800 sm:col-span-2">
//                                 <span className="block text-xs font-medium text-gray-400 dark:text-zinc-500 uppercase tracking-wider">Address</span>
//                                 {isEditing ? (
//                                     <input 
//                                         type="text"
//                                         value={address}
//                                         onChange={(e) => setAddress(e.target.value)}
//                                         className="mt-1 w-full bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 rounded px-2 py-1 text-sm text-gray-800 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-indigo-500"
//                                         placeholder="Enter address"
//                                     />
//                                 ) : (
//                                     <span className="mt-1 block text-sm font-semibold text-gray-800 dark:text-zinc-200">{user?.address || 'Not Set'}</span>
//                                 )}
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProfileContent;




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