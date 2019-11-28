'use strict';
const catModel = require('../models/catModel');

// const cats = catModel.cats;

const cat_list_get = async (req, res) => {
  const cats = await catModel.getAllCats();
  await res.json(cats);
};

const cat_create_post = async (req, res) => {
  const params = [
    req.body.name,
    req.body.age,
    req.body.weight,
    req.body.owner,
    req.file.filename,
  ];
  const response = await catModel.addCat(params);
  await res.json(response);
};

const cat_get = async (req, res) => {
  const params = [req.params.id];
  const cat = await catModel.getCat(params);
  await res.json(cat[0]);
};

const cat_update_put = async (req, res) => {
  const params = [
    req.body.name,
    req.body.age,
    req.body.weight,
    req.body.owner,
    req.body.id,
  ];
  console.log('update', params);
  const user = await catModel.updateCat(params);
  await res.json(user);
};

const cat_delete = async (req, res) => {
  const params = [req.params.id];
  console.log('delete', params);
  const cat = await catModel.deleteCat(params);
  await res.json(cat);
};

module.exports = {
  cat_list_get,
  cat_create_post,
  cat_get,
  cat_update_put,
  cat_delete,
};
