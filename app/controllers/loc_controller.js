import Loc from '../models/loc_model';

export const createLoc = (req, res) => {
  const loc = new Loc();
  loc.gps = req.body.gps;
  loc.content = req.body.content;
  loc.save()
  .then(result => {
    res.json({ message: 'Location created!' });
  })
  .catch(error => {
    res.json({ error });
  });
};

export const getLocs = (req, res) => {
  Loc.find({}, '_id gps content',
    (err, docs) => {
      if (err) {
        res.send(err);
      }
      res.json(docs);
    });
};

export const getLoc = (req, res) => {
  Loc.findById(req.params.id, '_id gps content',
    (err, docs) => {
      if (err) {
        res.send(err);
      }
      res.json(docs);
    });
};

export const updateLoc = (req, res) => {
  Loc.update({ _id: req.params.id }, { gps: req.body.gps, content: req.body.content },
      (err, raw) => {
        if (err) {
          res.send(err);
        }
        getLoc(req, res);
      });
};

export const deleteLoc = (req, res) => {
  Loc.remove({ _id: req.params.id },
    (err) => {
      res.send(err);
    });
};
