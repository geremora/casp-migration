const MEETINGS_TYPES = {
    STATUS_CONFERENCE: "status",
    VISTA_PUBLICA: "arbitraje",
    CONTINUACION: "continuacion",
    MEDIACION: "mediacion"
};

const MEETINGS_STATUS = {
    CELEBRADA: "did_happen",
    SIN_EFECTO: "cancelled",
    SUSPENDIDA_APELADA: "cancelled",
    SUSPENDIDA_APELANTE: "cancelled",
    SUSPENDIDA_COMISION: "cancelled",
    SUSPENDIDA_OFICIAL_EXAMINADOR: "cancelled",
    SUSPENDIDA_PARTES_EPIGRAFE: "cancelled",
    SENALADA: "scheduled",
    SOMETIDA_CON_INFORME: "scheduled"
};

const MEETINGS_OFFSET_ID = {
    OFFSET_TBL_CITACIONES: 50000,
    OFFSET_TBL_ROOM: 10000
};

module.exports.MEETINGS_OFFSETS_ID = MEETINGS_OFFSET_ID;
module.exports.MEETINGS_TYPES = MEETINGS_TYPES;
module.exports.MEETINGS_STATUS = MEETINGS_STATUS;