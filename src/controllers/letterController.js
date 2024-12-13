const { StatusCodes } = require('http-status-codes');
const letterService = require('../services/letterService');

const createLetter = async (req, res) => {
   try {
      const letterInfo = req.body;
      if (await letterService.createLetter(letterInfo)) {
         return res.status(StatusCodes.OK).json({ message: '작성 완' });
      }
      return res.status(StatusCodes.BAD_REQUEST).json({ message: '잘못요청' });
   } catch (err) {
      console.log(err);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'err' });
   }
};

const getLetters = async (req, res) => {
   try {
      const { hashId } = req.params;
      const letters = await letterService.getLetters(hashId);
      if (!letters || letters.length === 0) {
         return res.status(StatusCodes.NOT_FOUND).json({ message: '데이터 없음' });
      }
      return res.status(StatusCodes.OK).json({ message: '조회 완', letters });
   } catch (err) {
      console.log(err);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'err' });
   }
};

module.exports = { createLetter, getLetters };
