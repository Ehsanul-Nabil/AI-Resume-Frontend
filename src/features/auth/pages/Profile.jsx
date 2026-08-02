import { useEffect, useState } from "react";
import ProfileContent from "../components/ProfileContent";
import { useAuth } from "../hooks/useAuth";

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const { user,  handleUpdateUser } = useAuth(); 
  
  useEffect(() => {
    if (user) {
        setLoading(false);
    }
  }, [user]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-zinc-950">
      <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  if (!user) return <div className="min-h-screen flex items-center justify-center text-center p-10 dark:text-white">User data not found.</div>;

  return (
    <ProfileContent 
      user={user} 
      onSave={handleUpdateUser} 
    />
  );
};

export default Profile;