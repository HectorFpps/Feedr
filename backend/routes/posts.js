const router = require('express').Router();
let Post = require('../models/post.model');

router.route('/').get((req, res) => {
    Post.find()
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const picture = req.body.picture;
    const username = req.body.username;
    const likes = Number(req.body.likes);
    const dislikes = Number(req.body.dislikes);
    const content = req.body.content;
    const date = Date.parse(req.body.date);

    const newPost = new Post({
        picture,
        username,
        likes,
        dislikes,
        content,
        date,
    });

    newPost.save()
        .then(() => res.json('Post added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Post.findById(req.params.id)
        .then(post => res.json(post))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Post.findByIdAndDelete(req.params.id)
        .then(() => res.json('Post deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Post.findById(req.params.id)
        .then(post => {
            post.picture = req.body.picture;
            post.username = req.body.username;
            post.likes = Number(req.body.likes);
            post.dislikes = Number(req.body.dislikes);
            post.content = req.body.content;
            post.date = Date.parse(req.body.date);

            post.save()
                .then(() => res.json('Post updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;