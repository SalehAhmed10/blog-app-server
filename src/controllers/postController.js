const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const userId = req.userId;

    const post = await prisma.post.create({
      data: {
        title: title,
        content: content,
        userId: userId,
      },
    });

    res.status(200).json({
      message: "Post created successfully",
      post: post,
    });
  } catch (error) {
    res.status(500).json({
      error: error?.message || "Error creating post",
    });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      include: {
        user: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.status(200).json({
      posts,
    });
  } catch (error) {
    res.status(500).json({
      error: error?.message || "Something went wrong",
    });
  }
};
