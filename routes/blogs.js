var express = require("express");
const { blogsDB } = require("../mongo");
var router = express.Router();

var blogsImport = require("../public/sampleBlogs");
const blogPost = blogsImport.blogPosts;

/* GET users listing. */
router.get("/",async function (req, res, next) {
  const collection = await blogsDB().collection("blog50")
  const post = await collection.find({}).toArray()
  res.json(blogPost);
});

router.get("/all", function (req, res, next) {
  let sort = req.query.sort;
  res.json(sortBlogs(sort));
});

let sortBlogs = (order) => {
  if (order === "asc") {
    return blogPost.sort(function (a, b) {
      return new Date(a.createdAt) - new Date(b.createdAt);
    });
  } else if (order === "desc") {
    return blogPost.sort(function (a, b) {
      return new Date(a.createdAt) - new Date(b.createdAt);
    });
  } else {
    return blogPost;
  }
};

router.get("/singleBlog/:blogId", function (req, res, next) {
  const blogId = req.params.blogId;
  res.json(findBlogId(blogId));
});

router.get("/postblog", function (req, res, next) {
  res.render("postBlog");
});
router.post("/submit", function (req, res, next) {
  console.log(req.body);
  console.log("bloglist before ", blogsImport.blogPosts);
  const today = new Date();
  const newPost = {
    title: req.body.title,
    text: req.body.text,
    author: req.body.author,
    createdAt: today.toISOString(),
    id: String(blogsImport.blogPosts.length + 1),
  };
  blogsImport.blogPosts.push(newPost);
  console.log("bloglist after ", blogsImport.blogPosts);

  res.send("OK");
});

router.get("/displayblogs", (req, res, next) => {
  res.render("displayblogs");
});

router.get("/displaysingleblogs", (req, res, next) => {
  res.json("displaysingleblogs");
});

module.exports = router;
