import request from '@/utils/request'

// 查询【清单任务】列表
export function listTask(query) {
  return request({
    url: '/api/v1/todo-task/list',
    method: 'get',
    params: query
  })
}

// 查询【清单任务】详细
export function getTask(id) {
  return request({
    url: '/api/v1/todo-task/' + id,
    method: 'get'
  })
}

// 查询【清单任务】详细
export function getTaskInfo(userId) {
  return request({
    url: '/api/v1/todo-task/user/' + userId,
    method: 'get'
  })
}

// 新增【清单任务】
export function addTask(data) {
  return request({
    url: '/api/v1/todo-task',
    method: 'post',
    data: data
  })
}

// 修改【清单任务】
export function updateTask(data) {
  return request({
    url: '/api/v1/todo-task',
    method: 'put',
    data: data
  })
}

// 删除【清单任务】
export function delTask(id) {
  return request({
    url: '/api/v1/todo-task/' + id,
    method: 'delete'
  })
}
