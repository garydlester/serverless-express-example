const catchAsync = require('../utils/catchAsync');

exports.getPLSTAssets = catchAsync(async (req, res, next) => {
    // useAssetGraphics from PLST React go here.
    res.status(200).json({
        status: 'success',
        query: req.query
    })
});
