const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
  res.render("index");
});

router.get("/id-class", (req, res) => {
  res.render("1-idAndClass");
});

router.get("/nesting", (req, res) => {
  res.render("2-nesting");
});

router.get("/text", (req, res) => {
  res.render("3-text",{book: {name: "Hello", price: 12.99}});
});

router.get("/varibles", (req, res) => {
  res.render("4-varibles",{book: {name: "Hello"}});
});

router.get("/escaping", (req, res) => {
  res.render("5-escaping",{name: "Hello <em>World</em>"});
});

router.get("/attributes", (req, res) => {
  res.render("6-attributes",{name: "Bob",type: "text" });
});

router.get("/comments", (req, res) => {
  res.render("7-comments");
});

router.get("/if-unless", (req, res) => {
  res.render("8-ifAndUnless", {errors:false,name: "Bob"});
});

router.get("/for-each", (req, res) => {
  res.render("9-forAndEach",{books: ["A", "B", "C"],books1: ["A", "B", "C"]});
});

router.get("/case", (req, res) => {
  res.render("10-case", {name: "Bob"});
});

router.get("/mixin", (req, res) => {
  res.render("11-mixin");
});


module.exports = router;
