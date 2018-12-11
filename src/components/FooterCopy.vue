<template>
  <section class="footer-copy pb-4 pt-4">
    <div class="row">
      <div class="col-lg-2 col-md-6">
        <div class="footer-copy-logo d-block pb-4 m-auto m-md-0">
          <a href="#">
            <Logo/>
          </a>
        </div>
      </div>
      <div class="col-lg-6 col-md-6">
        <p class="footer-copy-legal mb-4 text-center text-md-left">Člen skupiny PPF, IČ 29045371 / Praha 11, Hráského 2231/25, Zapsaná u rejstříkového soudu v Praze — Spisová značka B 16013</p>
      </div>
      <div class="col-lg-4 col-md-12">
        <div class="footer-copy-social">
          <a v-for="(item, index) in socials" href="#" :class="'social-' + item" class="btn-social mx-1" :key="index">
            <icon :name="item" :class="'icon-' + item"></icon>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Logo from '@/assets/logo-air-bank.svg'
  import '@/assets/icons/facebook'
  import '@/assets/icons/twitter'
  import '@/assets/icons/linkedin'
  import '@/assets/icons/googleplus'
  import '@/assets/icons/youtube'

  const socials = ['facebook', 'twitter', 'linkedin', 'googleplus', 'youtube']

  export default {
    components: {
      Logo
    },
    data () {
      return {
        socials
      }
    }
  }
</script>

<style scoped lang="scss">
  .footer-copy {
    &-logo {
      width: rem(110px);
    }

    &-legal {
      font-size: rem(14px);
    }

    &-social {
      display: flex;
      justify-content: center;
    }
  }

  .btn-social {
    display: flex;
    justify-content: center;
    align-items: center;
    @include size(rem(40px));
    border-radius: 50%;
    transition: all 0.125s;

    &:hover {
      transform: scale(1.1);
    }
  }

  .social-facebook {
    background-color: $facebook-color;
  }

  .social-twitter {
    background-color: $twitter-color;
  }

  .social-linkedin {
    background-color: $linkedin-color;
  }

  .social-googleplus {
    background-color: $googleplus-color;
  }

  .social-youtube {
    background-color: $youtube-color;
  }
</style>
