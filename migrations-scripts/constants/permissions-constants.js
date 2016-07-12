MSSQL_PERMISSION_MAPPING = {
	CAN_CHANGE_CONTACTS_CASE: 2,
    CAN_CLOSE_CASE: 33,
    CAN_ADD_CASE: 96,
    CAN_DELETE_CASE: 83,
    CAN_MERGE_UNMERGE_CASES: 32,
    CAN_ASSIGN_CASES_USER: 35, 		
    CAN_ASSIGN_CASES: 48,
    CAN_CHANGE_CASE_CATEGORY: 19,
    CAN_CHANGE_DESCRIPTION: 9,
    CAN_CHANGE_RECOLD_HOLDER: 9,
    CAN_CHANGE_CASE: 9,
    CAN_CHANGE_CASE_TYPE: 9,
};

PG_PERMISSION_IDS = {
	49: [339, 340, 363, 364],
    33: [345, 346, 369, 370],
    32: [353, 354, 355, 356, 329, 330, 331, 332],
    35: [337, 338, 361, 362],
    48: [337, 338, 361, 362],
    38: [335, 336, 359, 360],
    19: [341, 342, 365, 366],
    96: [323, 324, 347, 348],
    83: [325, 326, 351, 352],
    2: [339, 340, 363, 364]
};

module.exports.MSSQL_PERMISSION = MSSQL_PERMISSION_MAPPING;
module.exports.PG_PERMISSIONS = PG_PERMISSION_IDS;

/*
323
324
329
330
331
332
335
336
337
338
339
340
341
342
345
346
347
348
353
354
355
356
359
360
361
362
363
364
365
366
369
370

*/