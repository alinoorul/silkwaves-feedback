const UserFeedback = require('../models/UserFeedback')

//  @desc       Get all feedback
//  @route      GET /api/v1/feedback
//  @access     Public

exports.getFeedback = async (req, res, next) => {
    try {
        const userFeedback = await UserFeedback.find();

        return res.status(200).json({
            success: true,
            data: userFeedback
        });
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            error: "Server error"
        });
    }
}

//  @desc       Add feedback
//  @route      POST /api/v1/feedback
//  @access     Public

exports.addFeedback = async (req, res, next) => {

    try {
        const { name, email, mobileNumber, service, location, feedback } = req.body;

        const userFeedback = await UserFeedback.create(req.body);

        return res.status(201).json({
            success: true,
            data: userFeedback
        });
        
    } catch (error) {
        if(error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);

            res.status(400).json({
                success: false,
                error: messages
            })
        } else {
            return res.status(500).json({
                success: false,
                error: "Server error"
            });
        }
        console.log(error);
    }
}

//  @desc       Delete feedback
//  @route      DELETE /api/v1/feedback/:id
//  @access     Public

exports.deleteFeedback = async (req, res, next) => {
    try {
        const userFeedback = await UserFeedback.findById(req.params.id);
        
        if(!userFeedback) {
            return res.status(404).json({
                success: false,
                error: 'No feedback found'
            });
        }

        await userFeedback.remove();

        return res.status(200).json({
            success: true,
            data: userFeedback
        });

    } catch (error) {
        return res.status(500).json({
                success: false,
                error: "Server error"
        });
    }
}