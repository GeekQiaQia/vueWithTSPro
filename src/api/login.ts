import Api from '@/utils/request'

const getLoginData = (data:any) => {
  return Api.post("/rest/login",JSON.stringify(data))
};

export default  getLoginData;

