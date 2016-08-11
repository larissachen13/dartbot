import Loc from '../models/loc_model';

export const createLoc = (req, res) => {
  const loc = new Loc();
  loc.gps = req.body.gps;
  loc.content = req.body.content;
  loc.save()
  .then(result => {
    res.json({ message: 'Loc created' });
  }).catch(error => {
    res.json({ error });
  });
};

export const getLoc = (req, res) => {
  Loc.find({ gps: req.body.gps })
  .then(result => {
    res.json({ message: 'Loc created' });
  }).catch(error => {
    res.json({ error });
  });
};
