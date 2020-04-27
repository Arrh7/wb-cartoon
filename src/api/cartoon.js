// 专门处理 漫画相关的 接口请求

// 引入封装好的 axios 的实例
import request from '@/utils/request'

/**
 * 获取完结页面数据
 */
export const getComic = () => {
  return request({
    url: '/api/wbcomic/home/recommend_list?location_en=ending_works_list&_type=h5',
    method: 'GET'
    // 需要请求体参数，就提供 data
    // 需求查询字符串参数，就提供 params
  })
}
