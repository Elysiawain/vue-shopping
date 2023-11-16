<!-- 登录路由组件 -->
<template>
    <div>
        <!-- 头部 -->
        <van-nav-bar title="登录" left-arrow @click-left="$router.go(-1)" />
        <!-- 身体 -->
        <div class="container">
            <div class="title">
                <h3>邮箱登录</h3>
                <p>未注册的邮箱登录后将自动注册</p>
            </div>

            <div class="form">
                <div class="form-item">
                    <input v-model="eamil" @input="checkEamil" class="inp" maxlength="30" placeholder="请输入邮箱地址" type="text">
                </div>
                <div class="form-item">
                    <input v-model="picCode" class="inp" maxlength="5" placeholder="请输入图形验证码" type="text">
                    <img v-if="codeImgURL" :src="codeImgURL" alt="" @click="getCode">
                    <!-- 绑定图片 -->
                </div>
                <div class="form-item">
                    <input class="inp" placeholder="请输入验证码" type="text">
                    <button @click="getAuthCode">
                        {{ nowSeconds === originSenconds ? '获取验证码' : nowSeconds + 's后重发' }}
                    </button>
                </div>
            </div>
            <div class="login-btn" @click="checkLogin">登录</div>
        </div>
    </div>
</template>

<script>
import { getPicCode } from '@/api/login'
// import axios from 'axios'
export default {
  name: 'LoginIndex',
  data () {
    return {
      eamil: '',
      // 验证码
      codeImgURL: '', // 验证码图片地址
      codeKey: '', // 验证码key
      picCode: '', // 用户输入的验证码
      originSenconds: 60,
      nowSeconds: 60,
      code: '',
      codeTimer: null// 邮箱验证码
    }
  },
  async created () {
    this.getCode()
  },
  methods: {
    // 判断用户输入的邮箱是否合法
    checkEamil () {
      // 定义邮箱校验正则表达式
      const reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
      if (reg.test(this.eamil)) {
        console.log(reg.test(this.eamil))
      }
      if (this.picCode.length === 4) {
        return true
      }
      return false
    },
    // 获取图形验证码
    async getCode () {
      await getPicCode()
        .then(res => {
          this.codeImgURL = res.data.base64
          this.codeKey = res.data.key
        }
        )
    },
    async getAuthCode () {
      // 先校验用户是否输入邮箱和验证码
      if (!this.checkEamil()) {
        this.$toast('请输入正确的邮箱和验证码！')
        return false
      }
      if (!this.codeTimer && this.nowSeconds === this.originSenconds) {
        // 开启定时器
        this.codeTimer = setInterval(() => {
          this.nowSeconds--
          if (this.nowSeconds === 0) {
            clearInterval(this.codeTimer)
            this.codeTimer = null
            this.nowSeconds = this.originSenconds
          }
        }, 1000)
      }

      // 发送验证码
      //   await axios.post('http://47.109.131.58:8080/user/sendEmail', JSON.stringify({ email: this.eamil }), {
      //     headers: {
      //       'Content-Type': 'application/json;charset=utf-8'
      //     }
      //   })
      //     .then(res => {
      //       console.log(res)
      //     })
      //     .catch(err => {
      //       console.error(err)
      //     })

      this.$toast('发送成功！请前往邮箱查看')
    },
    /* 登录判断，这里就不做验证码和图形验证码的校验 */
    checkLogin () {
      // 发送请求（省略）
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 1000,
        overlay: true
      })
      if (this.checkEamil()) {
        // 登录成功，跳转到首页路由组件
        this.$store.commit('user/setUserInfo', { userId: 1, token: '123456' })
        this.$router.push('/')
        return
      }
      this.$toast('请输入正确的邮箱和验证码！')
    }
  },
  destroyed () {
    clearInterval(this.codeTimer)
  }
}
</script>

<style lang="less" scoped>
.container {
    padding: 49px 29px;

    .title {
        margin-bottom: 20px;

        h3 {
            font-size: 20px;
            font-weight: normal;
        }

        p {
            line-height: 40px;
            font-size: 14px;
            color: #b8b8b8;
        }
    }

    .form-item {
        border-bottom: 1px solid #f3f1f2;
        padding: 8px;
        margin-bottom: 14px;
        display: flex;
        align-items: center;

        .inp {
            display: block;
            border: none;
            outline: none;
            height: 32px;
            font-size: 14px;
            flex: 1;
        }

        img {
            width: 94px;
            height: 31px;
        }

        button {
            height: 31px;
            border: none;
            font-size: 13px;
            color: #cea26a;
            background-color: transparent;
            padding-right: 9px;
        }
    }

    .login-btn {
        width: 100%;
        height: 42px;
        margin-top: 39px;
        background: linear-gradient(90deg, #ecb53c, #ff9211);
        color: #fff;
        border-radius: 39px;
        box-shadow: 0 10px 20px 0 rgba(0, 0, 0, .1);
        letter-spacing: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
}
</style>
