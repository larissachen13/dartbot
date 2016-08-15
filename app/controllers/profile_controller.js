import Profile from '../models/profile_model';

export const createProfile = (req, res) => {
  const profile = new Profile();
  profile.name = req.body.name;
  profile.description = req.body.description;
  profile.save()
  .then(result => {
    res.json({ message: 'Profile created' });
  }).catch(error => {
    res.json({ error });
  });
};

export const getProfile = (req, res) => {
  Profile.find({ name: req.body.name })
  .then(result => {
    res.json({ message: 'Profile found' });
  }).catch(error => {
    res.json({ error });
  });
};
