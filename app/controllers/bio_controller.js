import Bio from '../models/bio_model';
import AWS from 'aws-sdk';
import dotenv from 'dotenv';
dotenv.config({ silent: true });

const s3Bucket = process.env.S3_BUCKET_NAME;

export const createBio = (req, res) => {
  const bio = new Bio();
  bio.name = req.body.name;
  bio.major = req.body.major;
  bio.year = req.body.year;
  bio.content = req.body.content;
  bio.save()
  .then(result => {
    bio.image = `https://${s3Bucket}.s3.amazonaws.com/${result._id}`;
    bio.save().then((resultWithImage) => {
      res.json({ resultWithImage });
    })
    . catch(error => {
      res.json({ error });
    });
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

export const getSignedRequest = (req, res) => {
  const s3Params = {
    Bucket: s3Bucket,
    Key: req.body.id,
    Expires: 60, // expire after 60 mins
    ContentType: req.body.filetype,
    ACL: 'public-read',
  };
  const s3bucket = new AWS.S3();

  // get signed URL
  s3bucket.getSignedUrl('putObject', s3Params, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const returnData = {
        requestUrl: data,
        imageUrl: `https://${s3Params.Bucket}.s3.amazonaws.com/${s3Params.id}`,
      };
      res.json(returnData);
    }
  });
};
