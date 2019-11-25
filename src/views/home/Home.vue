<template>
  <div class="home" style="padding: 30px;">
    <button @click="updateDom">
      点击刷新
    </button>
    <ul>
      <li :key="item[key]" v-for="(item, key) in data.orderItemMap">
        <div :key="itemChildren.item_id" v-for="itemChildren in item">
          <img :src="itemChildren.src" alt="">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import BGIMG from '@/assets/bg.jpg'
export default {
  name: 'home',
  components: {},
  data () {
    return {
      data: {
        'result': 1,
        'msg': '12.5',
        'order': {
          'fields': {},
          'order_id': 58311,
          'sn': '156714687448',
          'member_id': 67452,
          'status': 4,
          'pay_status': 2,
          'ship_status': 2,
          'shipStatus': ' 已收货',
          'payStatus': '已付款',
          'orderStatus': '已收货',
          'regionid': null,
          'shipping_id': 2,
          'shipping_type': '中通快递',
          'shipping_area': '北京市-北京市-东城区',
          'goods': null,
          'create_time': 1567146874,
          'ship_name': 'adafdsf',
          'ship_addr': 'sdfafdasfasfdsdf',
          'ship_zip': null,
          'ship_email': null,
          'ship_mobile': '15945255441',
          'ship_tel': null,
          'ship_day': '任意日期',
          'ship_time': '',
          'is_protect': 0,
          'protect_price': 0.0,
          'goods_amount': 7.5,
          'shipping_amount': 5.0,
          'discount': 0.0,
          'order_amount': 12.5,
          'weight': 50.0,
          'paymoney': 12.5,
          'remark': '',
          'disabled': 0,
          'payment_id': 9,
          'payment_name': '余额支付',
          'payment_type': 'balancePayPlugin',
          'payment_account': '',
          'goods_num': null,
          'gainedpoint': 12,
          'consumepoint': 0,
          'depotid': 1,
          'cancel_reason': null,
          'sale_cmpl': 1,
          'sale_cmpl_time': 1567155600,
          'ship_provinceid': 1,
          'ship_cityid': 2,
          'ship_regionid': 3,
          'ship_townid': null,
          'signing_time': 1567751760,
          'the_sign': '订单超时未收货自动收货',
          'allocation_time': null,
          'admin_remark': '使用余额支付12.5',
          'address_id': 45899,
          'orderprice': {
            'goodsPrice': 0.0,
            'orderPrice': 0.0,
            'shippingPrice': 0.0,
            'needPayMoney': 0.0,
            'discountPrice': 0.0,
            'taxPayAmount': 0.0,
            'confirm_id': null,
            'weight': 0.0,
            'point': null,
            'discountItem': {},
            'actDiscount': 0.0,
            'gift_id': null,
            'bonus_id': null,
            'is_free_ship': 0,
            'act_free_ship': 0.0,
            'exchange_point': null,
            'activity_point': null,
            'credit_pay': null
          },
          'memberAddress': {
            'addr_id': null,
            'member_id': null,
            'name': null,
            'country': null,
            'province_id': null,
            'city_id': null,
            'region_id': null,
            'town_id': null,
            'province': null,
            'city': null,
            'region': null,
            'town': null,
            'addr': null,
            'zip': null,
            'tel': null,
            'mobile': null,
            'def_addr': 0,
            'remark': null,
            'isDel': null,
            'shipAddressName': null,
            'addressToBeEdit': null
          },
          'need_pay_money': 0.0,
          'ship_no': '75171226439739',
          'logi_id': 2,
          'logi_name': '中通速递',
          'is_online': 1,
          'gift_id': 0,
          'bonus_id': 0,
          'act_discount': 0.0,
          'is_cancel': 0,
          'activity_point': 0,
          'uname': null,
          'order_exchange_point': 0,
          'is_comment': null,
          'receipt': 0,
          'receipt_title': null,
          'receipt_type': null,
          'receipt_duty': null,
          'receipt_content': null,
          'parent_commission': 0.0,
          'root_commission': 0.0,
          'parent_member_id': 0,
          'root_member_id': 0,
          'last_logistic_time': 1568274640,
          'parent_order_id': 0,
          'order_type': 0,
          'amount_sum': 0.0,
          'wx_order_sn': null,
          'commission_result': 0,
          'treasure_order': 0,
          'paytime': 1567146890,
          'iscutprice': 0,
          'taxpayamount': 0.0,
          'order_source': 0,
          'complete_time': 0,
          'kaola_orderid': null,
          'kaola_payinfo': null,
          'commissionStatus': '待发放',
          'isOnlinePay': true,
          'orderType': 's',
          'isCod': false,
          'needPayMoney': 0.0
        },
        'gcount': 3,
        'order_amount': '12.50',
        'shipping_amount': '5.00',
        'distancetime': '22小时',
        'orderItemMap': {
          '凯洁1元cute伴侣盒': [{
            'item_id': 332693,
            'goods_id': 1283,
            'sn': 'YP002205661',
            'goods_name': '凯洁1元cute伴侣盒',
            'cover': 'https://oss.mkyx.com/attachment/goods/201710161903080041.jpg?x-oss-process=style/thumbnail',
            'price': 0.0,
            'pricetxt': '0.00',
            'unit': '件',
            'eye': 0,
            'count': 1,
            'addon': '',
            'src': '../../assets/logo.png'
          }],
          'JUSTCOLOR美妆彩片-新大美目-棕1': [{
            'item_id': 332691,
            'goods_id': 26886,
            'sn': 'MT050605908-15',
            'goods_name': 'JUSTCOLOR美妆彩片-新大美目-棕1',
            'cover': 'https://oss.mkyx.com/goods/20190307/1551961521.jpg?x-oss-process=style/small',
            'price': 3.75,
            'pricetxt': '3.75',
            'unit': '片',
            'eye': 2,
            'count': 1,
            'addon': '[{"name":"度数","value":"450"}]',
            'src': BGIMG
          }, {
            'item_id': 332692,
            'goods_id': 26886,
            'sn': 'MT050605908-23',
            'goods_name': 'JUSTCOLOR美妆彩片-新大美目-棕1',
            'cover': 'https://oss.mkyx.com/goods/20190307/1551961521.jpg?x-oss-process=style/small',
            'price': 3.75,
            'pricetxt': '3.75',
            'unit': '片',
            'eye': 1,
            'count': 1,
            'addon': '[{"name":"度数","value":"800"}]',
            'src': '/assets/logo.png'
          }]
        },
        'orderLogisticsMap': {
          'result': 1,
          'logi_number': '1111',
          'logistics': [{
            'id': null,
            'order_id': null,
            'time_str': '2019-08-30 14:34:50',
            'content': '配货中，等待快递揽件',
            'dateline': null,
            'formatContent': '配货中，等待快递揽件'
          }],
          'logi_name': '圆通速递',
          'logi_tel': '95311'
        },
        'orderDetailLogList': [{
          'log_id': 803694,
          'order_id': 58311,
          'op_id': 0,
          'op_name': '18210010828',
          'message': '订单创建',
          'op_time': 1567146875
        }, {
          'log_id': 803695,
          'order_id': 58311,
          'op_id': 0,
          'op_name': '系统检测',
          'message': '订单确认',
          'op_time': 1567146875
        }, {
          'log_id': 803696,
          'order_id': 58311,
          'op_id': 0,
          'op_name': '系统',
          'message': '确认付款',
          'op_time': 1567146890
        }, {
          'log_id': 803699,
          'order_id': 58311,
          'op_id': 0,
          'op_name': 'admin',
          'message': '添加快递单号：1111，物流公司：圆通速递',
          'op_time': 1567146913
        }, {
          'log_id': 803700,
          'order_id': 58311,
          'op_id': 0,
          'op_name': 'admin',
          'message': '添加快递单号：1111，物流公司：圆通速递',
          'op_time': 1567146914
        }, {
          'log_id': 803701,
          'order_id': 58311,
          'op_id': 0,
          'op_name': 'admin',
          'message': '订单发货，物流公司：圆通速递。物流单号：1111',
          'op_time': 1567146915
        }, {
          'log_id': 803702,
          'order_id': 58311,
          'op_id': 0,
          'op_name': 'admin',
          'message': '确认收货',
          'op_time': 1567146919
        }, {
          'log_id': 803765,
          'order_id': 58311,
          'op_id': 0,
          'op_name': '系统检测',
          'message': '订单发货，物流公司：中通速递。物流单号：75171226439739',
          'op_time': 1567155600
        }, {
          'log_id': 805564,
          'order_id': 58311,
          'op_id': 0,
          'op_name': '系统检测',
          'message': '确认收货',
          'op_time': 1567751760
        }]
      }
    }
  },
  mounted () {
    console.log(this.data)
  },
  methods: {
    updateDom () {
      this.dataFilter()
    },
    dataFilter () {
      for (var key in this.data.orderItemMap) {
        for (var i = 0; i < this.data.orderItemMap[key].length; i++) {
          if (this.data.orderItemMap[key][i].src === '../../assets/logo.png') {
            // this.data.orderItemMap[key][i].src = this.staticimgsurl+'/static/imagesmini/selected.png';
            this.$set(this.data.orderItemMap[key][i], 'src', '../../assets/bg.png')
          } else {
            // this.data.orderItemMap[key][i].src = this.staticimgsurl+'/static/imagesmini/select.png';
            this.$set(this.data.orderItemMap[key][i], 'src', '../../assets/logo.png')
            // this.isSrc = false
          }
        }
      }
    }
  }
}
</script>
