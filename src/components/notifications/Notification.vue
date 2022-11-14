<template>
  <div class="notification">
    <transition-group name="transition-animate" class="messages_list" tag="ul">
      <li
        class="notification__content"
        v-for="message in messages"
        :key="message.id"
        :class="message.icon"
      >
        <div class="notification__content__text">
          <span>{{ message.name }}</span>
          <i class="material-icons">{{ message.icon }}</i>
        </div>
        <div class="notification__content__buttons">
          <button v-if="rightButton.length">{{ rightButton }}</button>
          <button v-if="leftButton.length">{{ leftButton }}</button>
        </div>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  components: {},
  name: "Notification",
  props: {
    messages: {
      type: Array,
      default: () => {
        return [];
      },
    },
    rightButton: {
      type: String,
      default: "",
    },
    leftButton: {
      type: String,
      default: "",
    },
    timeout: {
      type: Number,
      default: 3000,
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    hideNotification() {
      let vm = this;

      if (this.messages.length) {
        setTimeout(function () {
          vm.messages.shift(vm.messages.length - 1, 1);
        }, vm.timeout);
      }
    },
  },
  watch: {
    messages: {
      handler() {
        this.hideNotification();
      },
      deep: true,
    },
  },
  mounted() {
    this.hideNotification();
  },
};
</script>

<style lang="scss">
.notification {
  position: fixed;
  top: 180px;
  right: 5px;
  z-index: 10;
  margin-bottom: 16px;
  .messages_list {
    display: flex;
    flex-direction: column-reverse;
  }
  &__content {
    padding: 30px;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 50px;
    margin-bottom: 16px;
    background: #f46d40;
    border-radius: 4px;

    &.error {
      background: red;
    }
    &.warning {
      background: orange;
    }
    &.check_circle {
      background: green;
    }
  }
  &__content__text {
    display: flex;
    align-items: center;
    justify-content: center;
    i {
      margin: 0 13px;
    }
  }
  &__content__buttons {
    button {
      border-radius: 4px;
      padding: 2px;
      margin: 0 2px;
    }
  }

  .transition-animate-enter-from {
    transform: translateX(120px);
    opacity: 0;
  }
  .transition-animate-enter-active {
    transition: all 0.6s ease;
  }
  .transition-animate-enter-to {
    opacity: 1;
  }
  .transition-animate-leave-from {
    height: 50px;
    opacity: 1;
  }
  .transition-animate-leave-active {
    transition: transform 0.6s ease, opacity 0.6s, height 0.6s 0.2s;
  }
  .transition-animate-leave-to {
    height: 0;
    transform: translateX(120px);
    opacity: 0;
  }
  .transition-animate-move {
    transition: transform 0.7s ease;
  }
}
@media (max-width: 991px) {
  .notification {
    position: fixed;
    top: 180px;
    right: -60px;
    z-index: 10;
    margin-bottom: 16px;
    width: 300px;

    &__content {
			padding: 10px;
      width: 200px;
    }
		.notification__content__text {
			span {
				font-size: 12px;
			}
		}
  }
}
</style>
