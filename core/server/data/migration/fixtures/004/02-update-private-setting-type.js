// Update the `isPrivate` setting, so that it has a type of `private` rather than `blog`
var models  = require('../../../../models'),
    Promise = require('bluebird'),

    message = 'Update isPrivate setting';

module.exports = function updatePrivateSetting(options, logger) {
    return models.Settings.findOne('isPrivate').then(function (setting) {
        if (setting && setting.get('type') !== 'private') {
            logger.info(message);
            return models.Settings.edit({key: 'isPrivate', type: 'private'}, options);
        } else {
            logger.warn(message);
        }
        return Promise.resolve();
    });
};
