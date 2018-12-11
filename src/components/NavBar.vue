<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <Logo class="logo"/>
      </a>
      <button class="navbar-toggler" type="button" @click="click">
        <icon name="toggle" class="icon-toggle"></icon>
      </button>
      <div class="navbar-collapse mt-3 mt-md-0 slide" :class="menuOpen ? 'show' : ''">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Běžný účet</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/loan" class="nav-link">Půjčka</router-link>
          </li>
          <li class="nav-item"><a href="" class="nav-link disabled">Spořicí účet</a></li>
          <li class="nav-item"><a href="" class="nav-link disabled">Převod hypotéky</a></li>
          <li class="nav-item"><a href="" class="nav-link disabled">Pojištění</a></li>
          <li class="nav-item"><a href="" class="nav-link disabled">
            <icon name="search" class="icon-search"></icon>
          </a></li>
        </ul>
      </div>
    </nav>
  </div>

</template>

<script>
  import Logo from '@/assets/logo-air-bank.svg'
  import '@/assets/icons/search'
  import '@/assets/icons/toggle'

  export default {
    components: {
      Logo
    },
    data () {
      return {
        menuOpen: false
      }
    },
    methods: {
      click () {
        this.menuOpen = !this.menuOpen
        this.$emit('toggle')
      }
    }
  }
</script>

<style scoped lang="scss">
  .logo {
    position: relative;
    width: rem(130px);
    @include media-breakpoint-up(lg) {
      width: rem(160px);
      top: rem(-18px);
    }
  }

  .navbar {
    padding-top: rem(10px);
    @include media-breakpoint-down(md) {
      padding-top: rem(20px);
    }
    z-index: 1;
  }

  .navbar-nav {
    .nav-item {
      text-align: center;

      .nav-link {
        position: relative;
        display: inline-block;
        padding-left: 0;
        padding-right: 0;
        margin: 0 rem(15px);

        &:after {
          content: "";
          position: absolute;
          backface-visibility: hidden;
          background: $primary;
          bottom: 0.7em;
          height: rem(2px);
          left: 50%;
          margin-left: 0;
          transform: translateX(-50%);
          transition: all 0.25s ease 0s;
          width: 0;
        }

        @include media-breakpoint-down(md) {
          font-size: rem(22px);
          margin: 0;
          text-align: center;
        }

        &:hover,
        &:focus {
          &:after {
            width: 100%;
          }
        }

        &.router-link-exact-active {
          &:after {
            width: 100%;
          }
        }
      }

      &:last-child {
        .nav-link {
          margin-right: 0;
        }
      }
    }
  }

  .slide {
    @include media-breakpoint-down(md) {
      overflow: hidden;
      max-height: 0;
      background-color: transparent;
      transition: all .3s ease;
      &.show {
        max-height: 1000px;
      }
    }
  }
</style>
