<template>
    <div >
        <div class="header" >
        <i class="iconfont iconiconfontjiantou1 mui-action-back" @click="back"></i>
        <p>添加地址</p>
    </div>
    <div class="main">
        <div class="user_info">
            <p class="u_name">联系人:</p>
            <input type="text" placeholder="请输入联系人姓名" class="u_name username" v-model="username">
        </div>
        <div class="user_sex user_info">
            <p class="u_name">性别:</p>
            <div class="person nv">
                <div :class=" display == 1 ? 'active yuan woman':' yuan woman'"  @click="chose(1)">
                    <i class="iconfont iconround_check_fill"></i>
                </div>
                <p>先生</p>
            </div>
            <div class="person nan ">
                <div :class=" display == 2 ? 'active yuan man':' yuan man'"  @click="chose(2)">
                    <i class="iconfont iconround_check_fill"></i>
                </div>
                <p>女士</p>
            </div>
            
        </div>

        <div class="phoneNum user_info" style="margin-top: .12rem;" >
            <p class="u_name">手机号:</p>
            <input type="text" placeholder="请输入联系人电话" class="u_name" v-model="phone">
        </div>
        <div class="diqu user_info" style="margin-top: .12rem;" id="picker">
            <p class="u_name">选择地区:</p>
            <div class="ii" style="float: right" @click="changeAddress">
            <p class="u_name chosess" style="float: left;margin-top: .02rem;" >{{ qingxz }} </p>
            <i class="iconfont icongengduo" style="float: right;margin-top: .06rem;"></i></div>
        </div>
        <div class="jutidiz user_info" style="margin-top: .12rem;border-bottom: 0;"   @click="showin">
            <p class="u_name">具体地址:</p>
            <input type="text" placeholder="请输入具体的收货地址" class="u_name" v-model="dizhi">
        </div>
    </div>
 <mu-slide-picker :slots="addressSlots" :visible-item-count="7" @change="addressChange" :values="address" v-show="boo"></mu-slide-picker>
    <div class="saveloca" @click="saveAddress">
            保存地址
        </div>

    </div>
</template>

<script>
const address = {
  '北京': ['北京'],
  '广东': ['广州', '深圳', '珠海', '汕头', '韶关', '佛山', '江门', '湛江', '茂名', '肇庆', '惠州', '梅州', '汕尾', '河源', '阳江', '清远', '东莞', '中山', '潮州', '揭阳', '云浮'],
  '上海': ['上海'],
  '天津': ['天津'],
  '重庆': ['重庆'],
  '辽宁': ['沈阳', '大连', '鞍山', '抚顺', '本溪', '丹东', '锦州', '营口', '阜新', '辽阳', '盘锦', '铁岭', '朝阳', '葫芦岛'],
  '江苏': ['南京', '苏州', '无锡', '常州', '镇江', '南通', '泰州', '扬州', '盐城', '连云港', '徐州', '淮安', '宿迁'],
  '湖北': ['武汉', '黄石', '十堰', '荆州', '宜昌', '襄樊', '鄂州', '荆门', '孝感', '黄冈', '咸宁', '随州', '恩施土家族苗族自治州', '仙桃', '天门', '潜江', '神农架林区'],
  '四川': ['成都', '自贡', '攀枝花', '泸州', '德阳', '绵阳', '广元', '遂宁', '内江', '乐山', '南充', '眉山', '宜宾', '广安', '达州', '雅安', '巴中', '资阳', '阿坝藏族羌族自治州', '甘孜藏族自治州', '凉山彝族自治州'],
  '陕西': ['西安', '铜川', '宝鸡', '咸阳', '渭南', '延安', '汉中', '榆林', '安康', '商洛'],
  '河北': ['石家庄', '唐山', '秦皇岛', '邯郸', '邢台', '保定', '张家口', '承德', '沧州', '廊坊', '衡水'],
  '山西': ['太原', '大同', '阳泉', '长治', '晋城', '朔州', '晋中', '运城', '忻州', '临汾', '吕梁'],
  '河南': ['郑州', '开封', '洛阳', '平顶山', '安阳', '鹤壁', '新乡', '焦作', '濮阳', '许昌', '漯河', '三门峡', '南阳', '商丘', '信阳', '周口', '驻马店'],
  '吉林': ['长春', '吉林', '四平', '辽源', '通化', '白山', '松原', '白城', '延边朝鲜族自治州'],
  '黑龙江': ['哈尔滨', '齐齐哈尔', '鹤岗', '双鸭山', '鸡西', '大庆', '伊春', '牡丹江', '佳木斯', '七台河', '黑河', '绥化', '大兴安岭地区'],
  '内蒙古': ['呼和浩特', '包头', '乌海', '赤峰', '通辽', '鄂尔多斯', '呼伦贝尔', '巴彦淖尔', '乌兰察布', '锡林郭勒盟', '兴安盟', '阿拉善盟'],
  '山东': ['济南', '青岛', '淄博', '枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜', '临沂', '德州', '聊城', '滨州', '菏泽'],
  '安徽': ['合肥', '芜湖', '蚌埠', '淮南', '马鞍山', '淮北', '铜陵', '安庆', '黄山', '滁州', '阜阳', '宿州', '巢湖', '六安', '亳州', '池州', '宣城'],
  '浙江': ['杭州', '宁波', '温州', '嘉兴', '湖州', '绍兴', '金华', '衢州', '舟山', '台州', '丽水'],
  '福建': ['福州', '厦门', '莆田', '三明', '泉州', '漳州', '南平', '龙岩', '宁德'],
  '湖南': ['长沙', '株洲', '湘潭', '衡阳', '邵阳', '岳阳', '常德', '张家界', '益阳', '郴州', '永州', '怀化', '娄底', '湘西土家族苗族自治州'],
  '广西': ['南宁', '柳州', '桂林', '梧州', '北海', '防城港', '钦州', '贵港', '玉林', '百色', '贺州', '河池', '来宾', '崇左'],
  '江西': ['南昌', '景德镇', '萍乡', '九江', '新余', '鹰潭', '赣州', '吉安', '宜春', '抚州', '上饶'],
  '贵州': ['贵阳', '六盘水', '遵义', '安顺', '铜仁地区', '毕节地区', '黔西南布依族苗族自治州', '黔东南苗族侗族自治州', '黔南布依族苗族自治州'],
  '云南': ['昆明', '曲靖', '玉溪', '保山', '昭通', '丽江', '普洱', '临沧', '德宏傣族景颇族自治州', '怒江傈僳族自治州', '迪庆藏族自治州', '大理白族自治州', '楚雄彝族自治州', '红河哈尼族彝族自治州', '文山壮族苗族自治州', '西双版纳傣族自治州'],
  '西藏': ['拉萨', '那曲地区', '昌都地区', '林芝地区', '山南地区', '日喀则地区', '阿里地区'],
  '海南': ['海口', '三亚', '五指山', '琼海', '儋州', '文昌', '万宁', '东方', '澄迈县', '定安县', '屯昌县', '临高县', '白沙黎族自治县', '昌江黎族自治县', '乐东黎族自治县', '陵水黎族自治县', '保亭黎族苗族自治县', '琼中黎族苗族自治县'],
  '甘肃': ['兰州', '嘉峪关', '金昌', '白银', '天水', '武威', '酒泉', '张掖', '庆阳', '平凉', '定西', '陇南', '临夏回族自治州', '甘南藏族自治州'],
  '宁夏': ['银川', '石嘴山', '吴忠', '固原', '中卫'],
  '青海': ['西宁', '海东地区', '海北藏族自治州', '海南藏族自治州', '黄南藏族自治州', '果洛藏族自治州', '玉树藏族自治州', '海西蒙古族藏族自治州'],
  '新疆': ['乌鲁木齐', '克拉玛依', '吐鲁番地区', '哈密地区', '和田地区', '阿克苏地区', '喀什地区', '克孜勒苏柯尔克孜自治州', '巴音郭楞蒙古自治州', '昌吉回族自治州', '博尔塔拉蒙古自治州', '石河子', '阿拉尔', '图木舒克', '五家渠', '伊犁哈萨克自治州'],
  '香港': ['香港'],
  '澳门': ['澳门'],
  '台湾': ['台北市', '高雄市', '台北县', '桃园县', '新竹县', '苗栗县', '台中县', '彰化县', '南投县', '云林县', '嘉义县', '台南县', '高雄县', '屏东县', '宜兰县', '花莲县', '台东县', '澎湖县', '基隆市', '新竹市', '台中市', '嘉义市', '台南市']
}
const addredict = ['二七区','中原区','郑东新区','金水区','高新区','库尔勒','越秀区']
export default {
    name:'Addaddress',
    data() {
        return {
            qingxz:'请选择',
            boo:false,
            dizhi:'',
            username:'',
            phone:'',
            display:1,
            addressSlots: [
                {
                width: '100%',
                textAlign: 'right',
                values: Object.keys(address)
                }, {
                width: '100%',
                textAlign: 'left',
                values: ['北京']
                }
            ],
            address: ['北京', '北京'],
            addressProvince: '北京',
            addressCity: '北京',
                }
        },
    methods: {
        back(){
            history.go(-1)
        },
        generateMixed(n) {
            var res = "";
            for(var i = 0; i < n ; i ++) {
                var num = Math.ceil(Math.random()*5);
                res += addredict[num];
            }
            return res;
        },
        showin(){
            this.boo = false;
             console.log(this.addressProvince)
        },
        changeAddress(){
            this.boo = true;
        },
        // 选择地址
        addressChange (value, index) {
            switch (index) {
                case 0:
                this.addressProvince = value
                const arr = address[value]
                this.addressSlots[1].values = arr
                this.addressCity = arr[0]
                break
                case 1:
                this.addressCity = value
                break
            }
      this.address = [this.addressProvince, this.addressCity]
      this.qingxz =  this.address.join('-')
     
    // this.qingxz = [this.addressProvince, this.addressCity]
    },
 
        chose(index){
            this.display = index;
        },
        saveAddress(){
            console.log(1111)
            console.log(this.generateMixed(1),this.addressCity)
            var _this = this;
            var config = {
                name:this.username,
                sex:this.display,
                phone:this.phone,
                province:this.addressProvince,
                city:this.addressCity,
                district:this.generateMixed(1),
                address:this.dizhi,
                status:0
            }
            this.$http.post('/user/add_my_address',config).then(res=>{
                console.log(222222)
                if(res.code == 1){
                    this.$router.push({path:"/Mine/address"});
                     console.log(11111111)
                      console.log(res.msg);
                }
            })
        }
    },
    mounted() {
       console.log();
    },

}
</script>

<style scoped="scope">
*{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        .demo-picker-container{
            width: 256px;

        }
        body{
            background: #F5F5F9;
        }
        .header{
            width: 100%;
            background: #FFF;
            height: .44rem;
            padding: .11rem;
        }
        .header .iconiconfontjiantou1{
            color: #999999;
            width: .08rem;
            height: .13rem;
            float: left;
            
        }
        .header p{
            font-size: .2rem;
            color: #333333;
            font-weight: bold;
            margin: auto;
            text-align: center;
            margin-top: -0.05rem;
            
        }
        .main{
            width: 100%;
            height:2.6rem;
            background: #FFF;
            margin-top: .11rem;
            padding: .14rem;
        }
        input{
            outline:medium;
            border: none;
        }
        .main .user_info{
            border-bottom: 1px solid #EEEEEE;
            /* height: .44rem; */
             width: 100%;
             overflow: hidden;
             
        }
         .u_name{
            font-size: .14rem;
            color: #999999;
            text-align: center;
            float: left;
            margin-bottom: .12rem;
        }
        
        .main .user_info input{
            /* float: right; */
            text-align: left;
            margin-left: .23rem;
        }
        .main .user_sex{
            margin-top: .19rem;
            height: .48rem;
            overflow: hidden;
        }
        .main .user_sex .person{
            float: left;
            margin-left: .3rem;
            display: flex;
            flex-direction: row;
        }
        .user_sex .person .yuan{
            margin-right: .09rem;
            border-radius: 50%;
            float: left;
            width: .2rem;
            height: .2rem;
            border: 1px solid #333C3C;
            position: relative;
        } 
    .user_sex .person .yuan .iconround_check_fill{
        display: none;
    }
    .user_sex .person .active .iconround_check_fill {
        display: block;
        font-size: .22rem;
        color: #9C53F6;
        align-items: center;
        position: absolute;
        top: -0.07rem;
        left: -0.02rem;
    }
    .icongengduo{
        width: .08rem;
        height: .13rem;
        color: #CCCCCC;
        float: right;
        margin-right: .08rem;
        margin-left: .05rem;

    }
       .saveloca{
          
            width: 3.45rem;
            height: .44rem;
            border: 1px solid #333C3C;
            border-radius: .25rem;
            text-align: center;
            line-height: .44rem;
            margin:  auto;
            margin-top: 2.49rem;
    }
</style>