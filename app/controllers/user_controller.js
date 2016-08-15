import User from '../models/user_model';

// still to be worked on -- once signup method decided

export const createUser = (req, res) => {
  const user = new User();
  user.name = req.body.name;
  user.email = req.body.email;
  user.content = req.body.content;
  user.save()
  .then(result => {
    res.json({ message: 'User created' });
  }).catch(error => {
    res.json({ error });
  });
};
