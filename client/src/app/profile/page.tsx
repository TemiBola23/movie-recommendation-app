"use client";
import React, { useEffect, useState } from "react";
import API from "../../../services/api";
import { useAuth } from "../../../context/AuthContext";

export default function ProfilePage({ params }: { params: { id: string } }) {
  const { user } = useAuth();
  const [profile, setProfile] = useState<any>(null);
  const [isFollowing, setIsFollowing] = useState(false);
  const [reviews, setReviews] = useState<any[]>([]);

  useEffect(() => {
    API.get(`/users/${params.id}`).then((res) => {
      setProfile(res.data);
      if (user) setIsFollowing(res.data.followers.some((u: any) => u._id === user.id));
    });
    API.get(`/reviews/user/${params.id}`).then((res) => setReviews(res.data));
  }, [params.id, user]);

  const handleFollow = async () => {
    if (isFollowing) {
      await API.post(`/users/${params.id}/unfollow`);
      setIsFollowing(false);
    } else {
      await API.post(`/users/${params.id}/follow`);
      setIsFollowing(true);
    }
  };

  if (!profile) return <div>Loading...</div>;

  return (
    <div className="max-w-xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-2">{profile.username}</h1>
      <div className="mb-2">Email: {profile.email}</div>
      <div>
        <span className="font-semibold">{profile.followers.length}</span> Followers &nbsp;
        <span className="font-semibold">{profile.following.length}</span> Following
      </div>
      {user && user.id !== params.id && (
        <button
          className={`px-5 py-1 rounded mt-3 font-semibold ${
            isFollowing ? "bg-red-500" : "bg-yellow-500"
          } text-white`}
          onClick={handleFollow}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </button>
      )}

      <h3 className="font-bold mt-8 mb-2">Reviews by {profile.username}</h3>
      <div className="space-y-3">
        {reviews.length === 0 && <div>No reviews yet.</div>}
        {reviews.map((r) => (
          <div key={r._id} className="bg-gray-100 rounded p-2">
            <div>
              <span className="text-yellow-600">★ {r.rating}</span>
            </div>
            <div>{r.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}