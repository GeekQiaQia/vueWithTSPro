import Api from '@/utils/request'

const getLoginData = (data:any) => {
  return Api.getData("/rest/login",JSON.stringify(data))
};

export default  getLoginData;

