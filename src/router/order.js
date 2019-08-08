//订单
const Audit = () => import('@/views/order/audit.vue');

export default [
    {
        path: '/view/audit',
        name: 'Audit',
        component:Audit,
        // meta: {
        //     title:'订单确认',
        //     breadcrumb:[
        //         { name: '管理中心', path: '' },
        //         { name: '用户中心', path: '' }
        //     ]
        // }
    }
]