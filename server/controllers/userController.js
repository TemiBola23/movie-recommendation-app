import User from '../models/User.js';

export const getProfile = async (req, res) => {
  const userId = req.params.id || req.user._id;
  try {
    const user = await User.findById(userId).select('-password').populate('following', 'username').populate('followers', 'username');
    if (!user) return res.status(404).json({ message: 'User not found.' });
    res.json(user);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const followUser = async (req, res) => {
  const { id } = req.params;
  try {
    const target = await User.findById(id);
    const current = await User.findById(req.user._id);
    if (!target) return res.status(404).json({ message: 'User not found.' });
    if (target.followers.includes(current._id)) return res.status(400).json({ message: 'Already following.' });

    target.followers.push(current._id);
    current.following.push(target._id);
    await target.save();
    await current.save();
    res.json({ message: 'Followed.' });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const unfollowUser = async (req, res) => {
  const { id } = req.params;
  try {
    const target = await User.findById(id);
    const current = await User.findById(req.user._id);
    if (!target) return res.status(404).json({ message: 'User not found.' });

    target.followers = target.followers.filter(f => f.toString() !== current._id.toString());
    current.following = current.following.filter(f => f.toString() !== target._id.toString());
    await target.save();
    await current.save();
    res.json({ message: 'Unfollowed.' });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};