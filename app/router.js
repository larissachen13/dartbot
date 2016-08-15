import { Router } from 'express';
import * as Loc from './controllers/loc_controller';
import * as Profile from './controllers/profile_controller';


const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'welcome to our blog api!' });
});

router.route('/locs')
  .post(Loc.createLoc)
  .get(Loc.getLoc);

router.route('/profiles')
  .post(Profile.createProfile)
  .get(Profile.getProfile);

export default router;
