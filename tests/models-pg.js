"use strict";

const PGModels = require('../models-pg');
const async = require('async');

module.exports = function() {
    async.parallel({
        auth_group: function(callback) {
            PGModels.auth_group.findAll({raw: true}).then(function(authGroupList) {
                callback(null, authGroupList.length);
            }).catch(function(error) {
                callback(error);
            });
        },
        auth_group_permissions: function(callback) {
            PGModels.auth_group_permissions.findAll({raw: true}).then(function(authGroupPermissionsList) {
                callback(null, authGroupPermissionsList.length);
            }).catch(function(error) {
                callback(error);
            });
        },
        auth_permission: function(callback) {
            PGModels.auth_permission.findAll({raw: true}).then(function(authPermissionList) {
                callback(null, authPermissionList.length);
            }).catch(function(error) {
                callback(error);
            });
        },
        bugs_bug: function(callback) {
            PGModels.bugs_bug.findAll({raw: true}).then(function(bugsBugList) {
                callback(null, bugsBugList.length);
            }).catch(function(error) {
                callback(error);
            });
        },
        cache_table: function(callback) {
            PGModels.cache_table.findAll({raw: true}).then(function(cacheTableList) {
                callback(null, cacheTableList.length);
            }).catch(function(error) {
                callback(error);
            });
        },
        cases_case: function(callback) {
            PGModels.cases_case.findAll({raw: true}).then(function(casesCaseList) {
                callback(null, caseCaseList.length);
            }).catch(function(error) {
                callback(error);
            });
        },
        cases_case_contacts: function(callback) {
            PGModels.cases_case_contacts.findAll({raw: true}).then(function(casesCaseContact) {
                callback(null, casesCaseContact.length);
            }).catch(function(error) {
                callback(error);
            });
        },
        cases_casecategory: function(callback) {
            PGModels.cases_casecategory.findAll({raw: true}).then(function(casesCaseCategory) {
                callback(null, casesCaseCategory.length);
            }).catch(function(error) {
                callback(error);
            });
        },
        cases_casecontainer: function(callback) {
            PGModels.cases_casecontainer.findAll({raw: true}).then(function(casesCaseContainer) {
                callback(null, casesCaseContainer.length);
            }).catch(function(error) {
                callback(error);
            });
        },
        cases_casesequence: function(callback) {
            PGModels.cases_casesequence.findAll({raw: true}).then(function(casesCaseSequence) {
                callback(null, casesCaseSequence.length);
            }).catch(function(error) {
                callback(error);
            });
        },
        cases_casetype: function(callback) {
            PGModels.cases_casetype.findAll({raw: true}).then(function(caseTypeList) {
                callback(null, caseTypeList.length);
            }).catch(function(error) {
                callback(error);
            });
        },
        contacts_contact: function(callback) {
            PGModels.contacts_contact.findAll({raw: true}).then(function(contactsContactList) {
                callback(null, contactsContactList.length);
            }).catch(function(error) {
                callback(error);
            });
        },
        contacts_contacttype: function(callback) {
            PGModels.contacts_contacttype.findAll({raw: true}).then(function(contactsContactTypeList) {
                callback(null, contactsContactTypeList.length);
            }).catch(function(error) {
                callback(error);
            });
        },
        django_admin_log: function(callback) {
            PGModels.django_admin_log.findAll({raw: true}).then(function(djangoAdminList) {
                callback(null, djangoAdminList.length);
            }).catch(function(error) {
                callback(error);
            });
        },
        django_content_type: function(callback) {
            PGModels.django_content_type.findAll({raw: true}).then(function(djangoContentTypeList) {
                callback(null, djangoContentTypeList.length);
            }).catch(function(error) {
                callback(error);
            });
        },
        django_session: function(callback) {
            PGModels.django_session.findAll({raw: true}).then(function(djangoSessionList) {
                callback(null, djangoSessionList.length);
            }).catch(function(error) {
                callback(error);
            });
        },
        django_site: function(callback) {
            PGModels.django_site.findAll({raw: true}).then(function(djangoSiteList) {
                callback(null, djangoSiteList.length);
            }).catch(function(error) {
                callback(error);
            });
        },
        events_eventtype: function(callback) {
            PGModels.events_eventtype.findAll({raw: true}).then(function(eventsEventTypeList) {
                callback(null, eventsEventTypeList.length);
            }).catch(function(error) {
                callback(error);
            });
        },
        events_eventtype_case_type: function(callback) {
            PGModels.events_eventtype_case_type.findAll({raw: true}).then(function(eventsEventTypeCaseTypeList) {
                callback(null, eventsEventTypeCaseTypeList.length);
            }).catch(function(error) {
                callback(error);
            });
        },
        events_importedevents: function(callback) {
            PGModels.events_importedevents.findAll({raw: true}).then(function(eventsImportEdeventsList) {
                callback(null, eventsImportEdeventsList.length);
            }).catch(function(error) {
                callback(error);
            });
        },
        events_incomingevent: function(callback) {
            PGModels.events_incomingevent.findAll({raw: true}).then(function(eventsIncomingEventList) {
                callback(null, eventsIncomingEventList.length);
            }).catch(function(error) {
                callback(error);
            });
        },
        events_incomingevent_cases: function(callback) {
            PGModels.events_incomingevent_cases.findAll({raw: true}).then(function(eventsIncomingEventList) {
                callback(null, eventsIncomingEventList.length);
            }).catch(function(error) {
                callback(error);
            });
        },
        events_outgoingevent: function(callback) {
            PGModels.events_outgoingevent.findAll({raw: true}).then(function(eventsOutgoingEventList) {
                callback(null, eventsOutgoingEventList.length);
            }).catch(function(error) {
                callback(error);
            });
        },
        events_outgoingevent_cases: function(callback) {
            PGModels.events_outgoingevent_cases.findAll({raw: true}).then(function(eventsOutgoingEventCasesList) {
                callback(null, result.length);
            }).catch(function(error) {
                callback(error);
            });
        },
        meetings_meeting: function(callback) {
            PGModels.meetings_meeting.findAll({raw: true}).then(function(meetingsMeetingList) {
                callback(null, meetingsMeetingList.length);
            }).catch(function(error) {
                callback(error);
            });
        },
        meetings_meeting_cases: function(callback) {
            PGModels.meetings_meeting_cases.findAll({raw: true}).then(function(meetingsMeetingCasesList) {
                callback(null, meetingsMeetingCasesList.length);
            }).catch(function(error) {
                callback(error);
            });
        },
        meetings_meetingattendee: function(callback) {
            PGModels.meetings_meetingattendee.findAll({raw: true}).then(function(meetingsMeetingAttendeeList) {
                callback(null, meetingsMeetingAttendeeList.length);
            }).catch(function(error) {
                callback(error);
            });
        },
        meetings_room: function(callback) {
            PGModels.meetings_room.findAll({raw: true}).then(function(meetingsRoomList) {
                callback(null, meetingsRoomList.length);
            }).catch(function(error) {
                callback(error);
            });
        },
        notes_note: function(callback) {
            PGModels.notes_note.findAll({raw: true}).then(function(notesNoteList) {
                callback(null, notesNoteList.length);
            }).catch(function(error) {
                callback(error);
            });
        },
        profiles_caspuser: function(callback) {
            PGModels.profiles_caspuser.findAll({raw: true}).then(function(profilesCapUserList) {
                callback(null, profilesCapUserList.length);
            }).catch(function(error) {
                callback(error);
            });
        },
        profiles_caspuser_groups: function(callback) {
            PGModels.profiles_caspuser_groups.findAll({raw: true}).then(function(profilesCapUserGroupsList) {
                callback(null, profilesCapUserGroupsList.length);
            }).catch(function(error) {
                callback(error);
            });
        },
        profiles_caspuser_user_permissions: function(callback) {
            PGModels.profiles_caspuser_user_permissions.findAll({raw: true}).then(function(profilesCapuserUserPermissionsList) {
                callback(null, profilesCapuserUserPermissionsList.length);
            }).catch(function(error) {
                callback(error);
            });
        },
        reversion_revision: function(callback) {
            PGModels.reversion_revision.findAll({raw: true}).then(function(reversionRevisionList) {
                callback(null, reversionRevisionList.length);
            }).catch(function(error) {
                callback(error);
            });
        },
        reversion_version: function(callback) {
            PGModels.reversion_version.findAll({raw: true}).then(function(reversionVersionList) {
                callback(null, reversionVersionList.length);
            }).catch(function(error) {
                callback(error);
            });
        },
        south_migrationhistory: function(callback) {
            PGModels.south_migrationhistory.findAll({raw: true}).then(function(southMigrationHistoryList) {
                callback(null, southMigrationHistoryList.length);
            }).catch(function(error) {
                callback(error);
            });
        },

    }, function (error, results) {
        if(error) {
            console.log(error);
        } else {
            console.log("Success connected to Postgres");
            console.log(results)
        }
        process.exit();
    });
}