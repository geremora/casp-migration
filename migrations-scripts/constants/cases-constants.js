const OFFSET_TBL_RADICACIONES = 420000;

//Option to match id (+/-) 100,000

const CASES_TYPE = {
    UNASIGNED: 1,
    ARBITRAJE: 2,
    SA: 13,
    SM: 14
};

const CASES_OFFSET_ID = {
    OFFSET_TBL_RADICACIONES: 420000
};

const CASES_CATEGORY_OFFSET_ID = {
    OFFSET_TBL_MATERIA: 1300,
    OFFSET_TBL_SUBMATERIA: 1400
};

module.exports.CASES_OFFSETS_ID = CASES_OFFSET_ID;
module.exports.CASES_CATEGORY_OFFSET_ID = CASES_CATEGORY_OFFSET_ID;
module.exports.CASES_TYPE = CASES_TYPE;