const User = require('./User');
const Post = require('./Post');
// const Comment = require('./Comment');

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Post };



// const Reader = require('./Reader');
// const Book = require('./Book');
// const LibraryCard = require('./LibraryCard');

// Reader.hasOne(LibraryCard, {
//   foreignKey: 'reader_id',
//   onDelete: 'CASCADE',
// });

// // A reader can have many books
// Reader.hasMany(Book, {
//   foreignKey: 'reader_id',
//   onDelete: 'CASCADE',
// });

// // A book belongs to a single reader
// Book.belongsTo(Reader, {
//   foreignKey: 'reader_id',
// });

// LibraryCard.belongsTo(Reader, {
//   foreignKey: 'reader_id',
// });

// module.exports = { Reader, Book, LibraryCard };
