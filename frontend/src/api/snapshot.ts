import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

function getAuthHeader() {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export function getSnapshotList() {
  return axios.get(`${BASE_URL}/api/snapshot/list`, { headers: getAuthHeader() });
}

export function renameSnapshot(id: number, name: string) {
  return axios.post(`${BASE_URL}/api/snapshot/rename`, { id, name }, { headers: getAuthHeader() });
}

export function deleteSnapshots(ids: number[]) {
  return axios.post(`${BASE_URL}/api/snapshot/delete`, { ids }, { headers: getAuthHeader() });
}

export function groupSnapshot(id: number, group: string) {
  return axios.post(`${BASE_URL}/api/snapshot/group`, { id, group }, { headers: getAuthHeader() });
} 