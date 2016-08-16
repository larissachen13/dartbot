// import controllers + express routing
import { Router } from 'express';
import * as Loc from './controllers/loc_controller';
import * as Bio from './controllers/bio_controller';
// import * as User from './controllers/user_controller';

// init Router
const router = Router();

// home dir
router.get('/', (req, res) => {
  res.json({ message: 'welcome to our blog api!' });
});

// locations

router.route('/locs')
  .post(Loc.createLoc)          // add new loc
  .get(Loc.getLocs);            // get all locs

router.route('/locs/:id')
  .put(Loc.updateLoc)           // edit existing loc
  .get(Loc.getLoc)              // get single loc
  .delete(Loc.deleteLoc);       // delete single loc

// bios

router.route('/bios')
  .post(Bio.createBio)          // add new bio
  .get(Bio.getBios);            // get all bios

router.route('/bios/:id')
  .put(Bio.updateBio)           // edit existing bio
  .get(Bio.getBio)              // get single bio
  .delete(Bio.deleteBio);       // delete single bio

// login?

// router.post('/signin', requireSignin, User.signin);
// router.post('/signup', User.signup);

export default router;
