// TODO  封装axios
// import { PagePsp } from 
import { requestWithTips } from '../utils/api';
import { ListReq, Calendar } from '../types/calendar';
export const getCanlendarList = (params?: ListReq) =>
  requestWithTips<PagePsp<Calendar>>('/api/v2/business/list', {
    method: 'GET',
    params,
  });