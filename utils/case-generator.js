const CASES_TYPES = require('../migrations-scripts/constants/cases-constants').CASES_TYPE;

module.exports = function (objCase, originalNumber, institutionalName) {
    var caseYear = originalNumber.substring(0, 4);
    var caseLastId = originalNumber.substring(8);

    objCase['old_number'] = originalNumber;

    if(institutionalName.indexOf('MUNICIPIO') > -1) {
        objCase['case_type_id'] = CASES_TYPES.SM;
        objCase['number'] = generateCaseNumber(caseYear, caseLastId, "SM");
    } else {
        objCase['case_type_id'] = CASES_TYPES.SA;
        objCase['number'] = generateCaseNumber(caseYear, caseLastId, "SA");
    }

    return objCase;
};

function generateCaseNumber(year, caseId, caseTypeCode) {
    return caseTypeCode + "-" + year.substring(2, 4) + "-" + caseId;
}

var formatCaseNumber = function (year, caseGeneratedId, caseTypeCode) {
    return caseTypeCode + "-" + year.substring(2, 4) + "-" + formatId(caseGeneratedId);
}

function formatId(n){
    return  n > 999 ? "" + n :
            n > 99 ? "0" + n :
            n > 9 ? "00" + n :
            "000" + n;
}

module.exports.formatCaseNumber = formatCaseNumber;