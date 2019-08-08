<template>
    <div>
        <Layout>
            <Sider breakpoint="md" collapsible :collapsed-width="78" v-model="isCollapsed">
                <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
                    <MenuItem name="1-1">
                        <Icon type="ios-navigate"></Icon>
                        <span>Option 1</span>
                    </MenuItem>
                    <MenuItem name="1-2">
                        <Icon type="ios-search"></Icon>
                        <span>Option 2</span>
                    </MenuItem>
                    <MenuItem name="1-3">
                        <Icon type="ios-settings"></Icon>
                        <span>Option 3</span>
                    </MenuItem>
                </Menu>
                <div slot="trigger"></div>
            </Sider>
            <Layout>
                <Header class="layout-header-bar">
                    <router-link to="/login">登录</router-link>
                    <router-link to="/view">首页</router-link>
                    <router-link to="/view/audit">订单审核</router-link>
                    <Button type="primary">随心主题</Button>
                </Header>
                <Content :style="{margin: '20px', background: '#fff', minHeight: '220px'}">
                    <router-view/>
                   <div class="hello">
                        <ul class="shop_container">
                        <li v-for="item in goods" :key="item.id" class="shop_container_li">
                            <div class="shop_img">
                            <img :src="item.img" alt="" width="100%" height="100%"/>
                            </div>
                            <div class="shop_detail">
                            <p>{{item.name}}</p>
                            <p>{{item.hint}}</p>
                            <p>￥{{item.price}}</p>
                            <p>
                                <span class="shop_reduce" @click="reduce_num(item.id)">-</span>
                                <span class="shop_num">{{item.num}}</span>
                                <span class="shop_add" @click="add_num(item.id)">+</span>
                            </p>
                            </div>
                        </li>
                        </ul>
                        <div class="foot">
                        <div class="total_price">
                            <span>合计：￥{{totalPrice}}</span>
                        </div>
                        <div class="total_num" :class="{payment: totalNum}">
                            <span>去结账：{{totalNum}}</span>
                        </div>
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>

<script>

import {mapState, mapMutations, mapGetters} from 'vuex'
export default {
     data () {
            return {
                isCollapsed: false
            };
        },
        computed: {
            ...mapState([
                // 获取state中的数据可以通过mapState辅助函数获取，也可以直接获取 例：this.$store.state.goods
                'goods', 'totalPrice', 'totalNum'
            ]),
            ...mapGetters([
                'goods_obj', 'goods_length'
            ]),
            menuitemClasses: function () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            },
        },
        mounted(){
            
            this.http.get(this.ports.homePage.hotLine, res => {
                console.log(res)
            })
            this.http.get(this.ports.homePage.posts, res => {
                console.log(res)
            })
        },
        methods: {
            ...mapMutations([
                // 获取mutation中的方法可以通过mapMutations 辅助函数获取，也可以直接获取。
                'ADD_CART'
            ]),
            reduce_num (id) {
                // this.REDUCE_CART(id)
                this.$store.commit('REDUCE_CART', id) //也可以直接获取
            },
            add_num (id) {
                this.ADD_CART(id) //通过mapMutations 辅助函数获取
            },
        }
};
</script>
<style scoped>
 .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
</style>