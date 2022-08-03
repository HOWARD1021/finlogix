export default {
    getTableData: {url: '/post/analysis?per_page=12&page=1', method: 'GET'}, // 首頁-新會員/新租賃跑馬燈
    getSettingMarquee: {url: '/homepage/marquee', method: 'GET'}, // 導覽頁-後台設定的跑馬燈
    login: {url: '/homepage/login', method: 'POST', needAuth: true}, //登入
  }
  