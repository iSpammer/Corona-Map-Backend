const mongoose = require('mongoose');
const loc = mongoose.model('loc');

exports.list_all_locs = (req, res) => {
  loc.find({}, (err, locs) => {
    if (err) res.send(err);
    res.json(locs);
  });
};

exports.create_a_loc = (req, res) => {
  const newloc = new loc(req.body);
  newloc.save((err, loc) => {
    if (err) res.send(err);
    res.json(loc);
  });
};

exports.read_a_loc = (req, res) => {
  loc.findById(req.params.locId, (err, loc) => {
    if (err) res.send(err);
    res.json(loc);
  });
};

exports.update_a_loc = (req, res) => {
  loc.findOneAndUpdate(
    { _id: req.params.locId },
    req.body,
    { new: true },
    (err, loc) => {
      if (err) res.send(err);
      res.json(loc);
    }
  );
};

exports.delete_a_loc = (req, res) => {
  loc.deleteOne({ _id: req.params.locId }, err => {
    if (err) res.send(err);
    res.json({
      message: 'loc successfully deleted',
     _id: req.params.locId
    });
  });
};