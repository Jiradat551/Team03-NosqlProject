<template>
  <main id="Home-page">
    <div id="clock">
      <div class="time">{{ time }}</div>

      <div class="btn-container">
        <a class="btn" @click="start">Start</a>
        <a class="btn" @click="stop">Stop</a>
        <a class="btn" @click="reset">Reset</a>
      </div>

      <div class="text"></div>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      time: "00:00:00.000",
      timeBegan: null,
      timeStopped: null,
      stoppedDuration: 0,
      started: null,
      running: false,
    };
  },
  methods: {
    start() {
      if (this.running) return;

      if (this.timeBegan === null) {
        this.reset();
        this.timeBegan = new Date();
      }

      if (this.timeStopped !== null) {
        this.stoppedDuration += new Date() - this.timeStopped;
      }

      this.started = setInterval(this.clockRunning, 10);
      this.running = true;
    },
    stop() {
      this.running = false;
      this.timeStopped = new Date();
      clearInterval(this.started);
    },
    reset() {
      this.running = false;
      clearInterval(this.started);
      this.stoppedDuration = 0;
      this.timeBegan = null;
      this.timeStopped = null;
      this.time = "00:00:00.000";
    },
    clockRunning() {
      var currentTime = new Date(),
        timeElapsed = new Date(
          currentTime - this.timeBegan - this.stoppedDuration
        ),
        hour = timeElapsed.getUTCHours(),
        min = timeElapsed.getUTCMinutes(),
        sec = timeElapsed.getUTCSeconds(),
        ms = timeElapsed.getUTCMilliseconds();

      this.time =
        this.zeroPrefix(hour, 2) +
        ":" +
        this.zeroPrefix(min, 2) +
        ":" +
        this.zeroPrefix(sec, 2) +
        "." +
        this.zeroPrefix(ms, 3);
    },
    zeroPrefix(num, digit) {
      var zero = "";
      for (var i = 0; i < digit; i++) {
        zero += "0";
      }
      return (zero + num).slice(-digit);
    },
  },
};
</script>
<style>

@import url("https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap");

@import "datatables.net-bs5";
thead {
  background-color: #ef4c4d;
}
.white-text {
  color: white;
}
.btn-container {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  justify-content: center;
    border: black solid 1px;
}
.btn {
  padding: 8px 15px;
  background-color: #ef4c4d;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
}
.btn:hover {
  background-color: #d8433e;
}

.time {
  text-align: center;
  font-size: 72px;
  -webkit-text-stroke: 2px black;
  -webkit-text-fill-color: black;
  font-family: "Share Tech Mono", sans-serif;
  background: transparent;
  cursor: pointer;
  flex-grow: 1;
  transition: color 0.1s ease-out;
}

</style>
