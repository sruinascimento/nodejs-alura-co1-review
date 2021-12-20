const moment = require('moment');

var formatarData = (data) => {
    var dataFormatada = moment(data, 'DD/MM/YYYY').format('YYYY/MM/DD');
    return dataFormatada;
} 

module.exports = formatarData;