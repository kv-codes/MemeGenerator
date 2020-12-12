module.exports = (sequelize, Sequelize) => {
    const Meme = sequelize.define("meme", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Meme;
  };