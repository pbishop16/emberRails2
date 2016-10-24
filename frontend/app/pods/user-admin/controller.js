import Ember from 'ember';

export default Ember.Controller.extend({
  customIcons: {
    "sort-asc": "glyphicon glyphicon-triangle-bottom",
    "sort-desc": "glyphicon glyphicon-triangle-top",
    "column-visible": "glyphicon glyphicon-check",
    "column-hidden": "glyphicon glyphicon-unchecked",
    "nav-first": "fa angle-double-left",
    "nav-prev": "fa angle-left",
    "nav-next": "fa angle-right",
    "nav-last": "fa angle-double-right",
    "caret": "caret"
  },
  customClasses: {
    "outerTableWrapper": "models-table-wrapper",
    "innerTableWrapper": "inner-table-wrapper",
    "table": "striped",
    "globalFilterWrapper": "pull-left",
    "columnsDropdownWrapper": "pull-right columns-dropdown",
    "columnsDropdownButtonWrapper": "waves-effect waves-light",
    "columnsDropdown": "",
    "theadCell": "table-header",
    "tfooterWrapper": "table-footer clearfix",
    "footerSummary": "table-summary",
    "footerSummaryNumericPagination": "col m3",
    "footerSummaryDefaultPagination": "col m8",
    "pageSizeWrapper": "col m2",
    "pageSizeSelectWrapper": "pull-right",
    "paginationWrapper": "table-nav",
    "paginationWrapperNumeric": "col m7",
    "paginationWrapperDefault": "col m2",
    "buttonDefault": "waves-effect waves-light btn",
    "noDataCell": ""
  },
	columns: [
    {
      'propertyName': "id",
      'title': "ID"
    },
    {
      'propertyName': "name",
      'title': "Name"
    },
    {
      'propertyName': "company",
      'title': "Company"
    },
    {
      'propertyName': "sector",
      'title': "Sector"
    },
    // },
    // {
    //   "title": "Delete",
    //   "template": "custom/delete"
    // }
  ]
});
