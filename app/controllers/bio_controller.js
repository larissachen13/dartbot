import Bio from '../models/bio_model';

badSyntax;

export const createBio = (req, res) => {
  const bio = new Bio();
  bio.name = req.body.name;
  bio.content = req.body.content;
  bio.image = 'nothing for now';        // using s3, will store img url
  bio.save()
  .then(result => {
    res.json({ message: 'Bio created!' });
  })
  .catch(error => {
    res.json({ error });
  });
};

export const getBios = (req, res) => {
  Bio.find({}, 'id name content image',
    (err, docs) => {
      if (err) {
        res.send(err);
      }

      res.json(docs);
    });
};

export const getBio = (req, res) => {
  Bio.findById(req.params.id, 'id name content image',
    (err, docs) => {
      if (err) {
        res.send(err);
      }
      res.json(docs);
    });
};

export const updateBio = (req, res) => {
  Bio.update({ id: req.params.id }, { name: req.body.name, content: req.body.content },
      (err, raw) => {
        if (err) {
          res.send(err);
        }
        getBio(req, res);
      });
};

export const deleteBio = (req, res) => {
  Bio.remove({ id: req.params.id },
    (err) => {
      res.send(err);
    });
};
