export default {
  install(app) {
	var authorize = JSON.parse(localStorage.getItem('authorize'))
	app.config.globalProperties.$CheckPermission = function(roles){
		if (authorize) {
            return roles.some(role => {
                switch (role) {
                    case 'root':
                        return authorize.is_type_account === 0;
                    case 'group':
                        return authorize.is_type_account === 1;
                    case 'tenant':
                        return authorize.is_type_account === 2;
                    case 'approver':
                        return authorize.is_type_account === 3;
                    default:
                        return false;
                }
            });
        }
        return false;
	};
  }
};