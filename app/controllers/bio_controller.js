import Bio from '../models/bio_model';

export const createBio = (req, res) => {
  const bio = new Bio();
  bio.name = req.body.name;
  bio.major = req.body.major;
  bio.year = req.body.year;
  bio.content = req.body.content;
  bio.image = 'nothing for now';        // using s3, will store img url
  bio.save()
  .then(result => {
    res.json({ result });
  })
  .catch(error => {
    res.json({ error });
  });
};

export const getBios = (req, res) => {
  Bio.find()
  .then(bios => {
    res.json(bios);
  })
  .catch(error => {
    res.json({ error });
  });
};

export const getBio = (req, res) => {
  Bio.findById(req.params.id)
  .then(bio => {
    res.json(bio);
  })
  .catch(error => {
    res.json({ error });
  });
};

export const updateBio = (req, res) => {
  Bio.update({ id: req.params.id }, { name: req.body.name, content: req.body.content, major: req.body.major, year: req.body.year })
  .then(() => {
    getBio(req, res);
  })
  .catch(error => {
    res.json({ error });
  });
};

export const deleteBio = (req, res) => {
  Bio.findByIdAndRemove(req.params.id)
  .then(result => {
    res.json(result);
  })
  .catch(error => {
    res.json({ error });
  });
};
