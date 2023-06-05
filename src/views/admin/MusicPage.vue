<template>
    <div class="player">
      <div class="player-content">
        
        <audio ref="audioRef" controls>
          <source :src="require(`../../assets/music/${currentTrack}`)" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
        <div class="controls">
            <button class="control-btn" @click="changeTrack('music_1.mp3')">Song 1</button>
            <button class="control-btn" @click="changeTrack('music_2.mp3')">Song 2</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentTrack: 'music_1.mp3'
      }
    },
    methods: {
      changeTrack(track) {
        this.currentTrack = track;
        this.$refs.audioRef.load();
        this.$refs.audioRef.play();
      }
    }
  }
  </script>
  
  <style scoped>
  .player {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .player-content {
    text-align: center;
  }
  
  .controls button {
    margin: 10px;
  }

  .controls {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.control-btn {
  padding: 10px 20px;
  background-color: #4CAF50;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 12px;
}

.control-btn:hover {
  background-color: #45a049;
}
  </style>
  