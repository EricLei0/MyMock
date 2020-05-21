var menuAdmin = {
  'meta': {
    'status': 200
  },
  'data': [
    {
      'id': 201,
      'title': "数据管理",
      'path': "/dataManagement",
      'pid': 0,
      'icon': "solution",
      'children': [
        {
          'id': 202,
          'title': "数据查询",
          'path': "/dataManagement/search",
          'pid': 201,
          'icon': "appstore",
          'children': []
        }
      ]
    },
    {
      'id': 301,
      'title': "项目台账",
      'path': "/inventory",
      'pid': 0,
      'icon': "container",
      'children': [
        {
          'id': 302,
          'title': "项目台账查询",
          'path': "/inventory/search",
          'pid': 301,
          'icon': "appstore",
          'children': []
        }
      ]
    },
    {
      'id': 401,
      'title': "其他信息",
      'path': "/information",
      'pid': 0,
      'icon': "reconciliation",
      'children': [
        {
          'id': 402,
          'title': "通讯录查询",
          'path': "/information/contacts",
          'pid': 401,
          "icon": "contacts",
          'children': []
        }
      ]
    }
  ]
}

module.exports = {
  menuAdmin
};