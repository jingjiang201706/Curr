import request from '../utils/request';

export async function updateUpDown(params) {
  return request('/api/updowns', {
    method: 'post',
    body: JSON.stringify(params),
  });
}

export async function addDown(params) {
  return request('/api/updowns', {
    method: 'post',
    body: JSON.stringify(params),
  });
}

export async function getAllUpDowns(params) {
  return request(`/api/updowns?pageSize=${params.pageSize || 10}&currPage=${params.currPage || 1}&type=${params.type}&username=${params.username || ''}`, {
    method: 'get',
  });
}

export async function getALlReviewUpDowns(params) {
  return request(`/api/updowns/review?pageSize=${params.pageSize || 10}&currPage=${params.currPage || 1}&startTime=${params.startTime}&endTime=${params.endTime}&username=${params.username || ''}`, {
    method: 'get',
  });
}

